export class AppService {
  public getActive = async (): Promise<{ message: string }> => {
    return { message: 'Active' };
  };
}
