export default interface IUserAuth {
    catUserRolId: string,
    infoUserGivenName: string,
    infoUserSurname: string,
    infoUserEmail: string,
    infoUserPhoneNumber: string,
    infoUserAddress: string,
    infoUserActive: boolean,
    infoUserToken: string,
    infoUserPasswordHash: string,
    infoUserPasswordSalt: string,
    password: string
}