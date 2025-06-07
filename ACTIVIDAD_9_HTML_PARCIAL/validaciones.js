document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const formTitle = document.getElementById("form-title");

  const campos = [
    {
      id: "nombre",
      validar: valor => valor.length > 6 && valor.includes(" "),
      mensaje: "Debe tener más de 6 letras y un espacio"
    },
    {
      id: "email",
      validar: valor => valor.includes("@") && valor.includes("."),
      mensaje: "Email inválido"
    },
    {
      id: "password",
      validar: valor => valor.length >= 8 && !isNaN(valor) === false && /[a-zA-Z]/.test(valor),
      mensaje: "Mínimo 8 caracteres con letras y números"
    },
    {
      id: "repeat-password",
      validar: valor => valor === document.getElementById("password").value,
      mensaje: "Las contraseñas no coinciden"
    },
    {
      id: "edad",
      validar: valor => !isNaN(valor) && parseInt(valor) >= 18,
      mensaje: "Debés tener al menos 18 años"
    },
    {
      id: "telefono",
      validar: valor => valor.length >= 7 && !isNaN(valor),
      mensaje: "Sólo números, mínimo 7 dígitos"
    },
    {
      id: "direccion",
      validar: valor => valor.length >= 5 && valor.includes(" "),
      mensaje: "Debe tener letras, números y un espacio"
    },
    {
      id: "ciudad",
      validar: valor => valor.length >= 3,
      mensaje: "Debe tener al menos 3 letras"
    },
    {
      id: "codigo-postal",
      validar: valor => valor.length >= 3,
      mensaje: "Debe tener al menos 3 caracteres"
    },
    {
      id: "dni",
      validar: valor => valor.length >= 7 && valor.length <= 8 && !isNaN(valor),
      mensaje: "Debe ser un número de 7 u 8 dígitos"
    }
  ];

  campos.forEach(({ id, validar, mensaje }) => {
    const input = document.getElementById(id);
    const error = document.getElementById("error-" + id);

    input.addEventListener("blur", () => {
      if (!validar(input.value.trim())) {
        error.textContent = mensaje;
        error.style.display = "block";
      } else {
        error.textContent = "";
        error.style.display = "none";
      }
    });

    input.addEventListener("focus", () => {
      error.textContent = "";
      error.style.display = "none";
    });
  });

  document.getElementById("nombre").addEventListener("input", (e) => {
    formTitle.textContent = "HOLA " + e.target.value.toUpperCase();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errores = [];
    let datos = [];

    campos.forEach(({ id, validar, mensaje }) => {
      const input = document.getElementById(id);
      const error = document.getElementById("error-" + id);
      const valor = input.value.trim();

      if (!validar(valor)) {
        error.textContent = mensaje;
        error.style.display = "block";
        errores.push("- " + mensaje);
      } else {
        error.textContent = "";
        error.style.display = "none";
        datos.push(`${id}: ${valor}`);
      }
    });

    if (errores.length > 0) {
      alert("Errores encontrados:\n\n" + errores.join("\n"));
    } else {
      alert("Formulario enviado con éxito:\n\n" + datos.join("\n"));
    }
  });
});
