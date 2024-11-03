import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { setupApiRoutes } from './routes/api-routes';
export const app = express();

const corsOptions = {
  origin: [process.env.CLIENT_URL!],
  credentials: true,
};

// Enable CORS request
app.use(cors(corsOptions));

// Set security HTTP headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve cookie in request object
app.use(cookieParser());

// Data sanitization against NO-SQL query injection
app.use(mongoSanitize());

// Setup API routes
setupApiRoutes(app);
