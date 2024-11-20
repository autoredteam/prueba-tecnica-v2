
const get_vehicle_info = async () => {
  return generar_informe_vehiculo("AAAA00");
};

export default get_vehicle_info;


const generar_informe_vehiculo = async (patente: any) => {
  try {
    const multasResponse = await fetch(`http://localhost:3000/fines/${patente}`);
    const multasData = await multasResponse.json();

    if (multasData.error) {
      return { error: "Error al obtener multas" };
    }

    return fetch(`http://localhost:3000/prt/${patente}`)
      .then(async (revisionResponse) => revisionResponse.json())
      .then(async (revisionData) => {
        if (revisionData.error) {
          return { error: "Error al obtener revisión técnica" };
        } else {
          return fetch(`http://localhost:3000/total-loss/${patente}`)
            .then(async (totalLossResponse) => totalLossResponse.json())
            .then(async (totalLossData) => {
              if (totalLossData.error) {
                return { error: "Error al obtener información de perdida total" };
              }
              const resultado = {
                totalLoss: { status: "OK", data: [] },
                fines: { status: "OK", data: [] },
                revision: { status: "OK", data: [] },
              };
              if (totalLossData.status === "REGISTRA PERDIDA") {
                resultado.totalLoss = { status: "NOT_OK", data: [] };
              } else if (multasData.multas.length > 0) {
                resultado.fines = { status: "NOT_OK", data: [] };
              } else {
                resultado.revision = { status: "OK", data: revisionData };
              }
              return resultado;
            });
        }
      });
  } catch (error) {
    return { error: "Fallo en la generación del informe" };
  }
};
