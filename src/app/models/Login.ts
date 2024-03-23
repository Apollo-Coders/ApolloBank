export interface Login {
    cpf: string; 
    password: PasswordComboDTO[];  
}

export interface PasswordComboDTO {
    firstNum: number;
    secondNum: number;
}
