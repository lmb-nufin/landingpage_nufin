
import { Container } from "@/components/landing/Container";

export default function DerechosArcoPage() {
  return (
    <Container>
      <div className="prose prose-lg mx-auto py-12 md:py-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Derechos ARCO</h1>

        <div>
          <p>Toda persona, como titular de sus datos personales o a través de su representante, tiene derecho a acceder a ellos, a rectificarlos, a solicitar su cancelación u oponerse a su tratamiento.</p>
          <p>Tus Derechos ARCO como dueño de datos personales te otorgan las siguientes facultades:</p>
          <ul className="list-disc pl-6">
            <li><strong>Acceso:</strong> Conocer qué datos personales poseemos de ti y cómo los usamos o compartimos.</li>
            <li><strong>Rectificación:</strong> Puedes solicitar la rectificación de tus datos en todo momento, si consideras que son incorrectos, inexactos o no se encuentran actualizados.</li>
            <li><strong>Cancelación:</strong> Pedir que tus datos personales sean suprimidos o eliminados, cuando la finalidad para la cual fueron recabados ha fenecido.</li>
            <li><strong>Oposición:</strong> Indicar una causa legítima para que dejemos de usar tus datos personales.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Para ejercer tus derechos ARCO:</h2>
          <p>Envía una Solicitud vía correo electrónico a nuestra área de Atención a Clientes en soporte@nufin.com.mx, anexando una copia de tu identificación oficial vigente.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Tras recibir tu solicitud:</h2>
          <ul className="list-disc pl-6">
            <li>Recibirás una respuesta en un plazo máximo de 20 días hábiles a partir de la recepción de la solicitud.</li>
            <li>Si tu solicitud está incompleta o presenta errores, tendrás 10 días hábiles para corregirla tras ser notificado.</li>
            <li>De no recibir respuesta en ese plazo, la solicitud será considerada como no presentada.</li>
          </ul>
        </div>

        <div>
          <p className="mt-8">En virtud de la regulación en materia de prevención de lavado de dinero, Nufin está obligado a conservar la información de sus clientes durante al menos diez (10) años. A pesar de las solicitudes de eliminación de una cuenta Nufin, conservará los registros de información del cliente (tales como: información del perfil de PLD del cliente y registros de identificación y registros de transacciones) hasta que el periodo de retención legal haya expirado.</p>
        </div>
      </div>
    </Container>
  );
}
