const sumar = (a,b,functionparametro) => {
    let resultado = a + b;
    functionparametro('El valor retornado es: ' + resultado);

    return resultado;
}

sumar(10,12,console.log);
sumar(10,12,alert);