let ans = window.prompt('Digite sua idade (em números): ');
ans = Number(ans);
let message;

if (ans >= 18) {
    message = ` ${ans} anos.\n MAIOR de idade.`;
    console.log(message);
    window.alert(message);
} else if (ans < 18) {
    message = `${ans} anos.\n MENOR de idade.`;
    console.log(message);
    window.alert(message);
} else {
    message = `Resposta inválida.\n---------------------------\nTente novamente! 😃`;
    console.log(message);
    window.alert(message);
}
