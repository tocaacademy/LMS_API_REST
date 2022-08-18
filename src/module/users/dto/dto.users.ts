interface IUsersDto {
  id: number;
  userName: string;
  email: string;
  password: string;
}

export default class UsersDto {
  public id: number;
  public userName: string;
  public email: string;
  public password: string;

  constructor(id: number, userName: string, email: string, password: string) {
    this.id = id;
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  public static fromUser(users: IUsersDto[]): UsersDto[] {
    return users.map(
      (user) => new UsersDto(user.id, user.userName, user.email, user.password)
    );
  }
}
