import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Clock, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export default function DerechosArcoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> Protección de Datos Personales
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-gray-900">
              Procedimiento para ejercer tus Derechos ARCO en Nufin
            </h1>
            <p className="text-gray-500 font-medium">
              Última actualización: 30 de Septiembre de 2024
            </p>
          </div>

          <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed">
            <div className="bg-gray-50 border-l-4 border-electric p-6 rounded-r-xl space-y-3">
              <p className="font-medium text-gray-900 text-base md:text-lg">
                Toda persona tiene derecho a la salvaguarda de su información personal y además, al acceso, rectificación, cancelación u oposición (ARCO) de los mismos, en los términos que fije la ley.
              </p>
              <p className="text-sm text-gray-600">
                Toda persona, como titular de sus datos personales o a través de su representante, tiene derecho a acceder a ellos, a rectificarlos, a solicitar su cancelación u oponerse a su tratamiento.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="text-electric" size={24} /> Tus Derechos ARCO
              </h2>
              <p className="mb-6 text-gray-600">
                Tus Derechos ARCO como dueño de datos personales te otorgan las siguientes facultades:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 border border-gray-100 bg-white rounded-xl shadow-sm space-y-2">
                  <span className="font-black text-electric text-lg block">Acceso</span>
                  <p className="text-sm text-gray-600">
                    Conocer qué datos personales poseemos de ti y cómo los usamos o compartimos.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 bg-white rounded-xl shadow-sm space-y-2">
                  <span className="font-black text-electric text-lg block">Rectificación</span>
                  <p className="text-sm text-gray-600">
                    Puedes solicitar la rectificación de tus datos en todo momento, si consideras que son incorrectos, inexactos o no se encuentran actualizados.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 bg-white rounded-xl shadow-sm space-y-2">
                  <span className="font-black text-electric text-lg block">Cancelación</span>
                  <p className="text-sm text-gray-600">
                    Pedir que tus datos personales sean suprimidos o eliminados, cuando la finalidad para la cual fueron recabados ha fenecido.
                  </p>
                </div>

                <div className="p-5 border border-gray-100 bg-white rounded-xl shadow-sm space-y-2">
                  <span className="font-black text-electric text-lg block">Oposición</span>
                  <p className="text-sm text-gray-600">
                    Indicar una causa legítima para que dejemos de usar tus datos personales.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Para ejercer tus derechos ARCO
              </h2>
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">Solicitud vía correo electrónico</p>
                  <p className="text-sm text-gray-600">
                    Envía tu solicitud a nuestra área de Atención a Clientes anexando copia de tu identificación oficial vigente.
                  </p>
                </div>
                <a
                  href="mailto:soporte@nufin.com.mx"
                  className="inline-flex items-center gap-2 bg-electric text-white font-bold text-sm px-4 py-2.5 rounded-lg hover:bg-electric/90 transition-colors shadow-sm"
                >
                  <Mail size={16} /> soporte@nufin.com.mx
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tras recibir tu solicitud
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <span>
                    <strong>Respuesta:</strong> Recibirás una respuesta en un plazo máximo de <strong>20 días hábiles</strong> a partir de la recepción de la solicitud.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <span>
                    <strong>Corrección de inconsistencias:</strong> Si tu solicitud está incompleta o presenta errores, tendrás <strong>10 días hábiles</strong> para corregirla tras ser notificado.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <span>
                    <strong>Plazo límite:</strong> De no recibir respuesta dentro de dicho plazo de subsanación, la solicitud será considerada como no presentada.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl space-y-2">
              <h3 className="font-bold text-amber-900 flex items-center gap-2">
                <Clock size={18} className="text-amber-700" /> Obligación de Retención Legal (PLD)
              </h3>
              <p className="text-sm text-amber-900/80 leading-relaxed">
                En virtud de la regulación en materia de prevención de lavado de dinero (PLD), Nufin está obligado a conservar la información de sus clientes durante al menos diez (10) años. A pesar de las solicitudes de eliminación de una cuenta, Nufin conservará los registros de información del cliente (tales como: información del perfil de PLD del cliente, registros de identificación y registros de transacciones) hasta que el periodo de retención legal haya expirado.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-sm text-gray-500">
                Puedes consultar nuestro Aviso de Privacidad.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/aviso-de-privacidad">
                  <FileText /> Ver Aviso de Privacidad
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className="flex justify-center pb-8">
        <Link href="/">
          <Button variant="outline">Ir al menú principal</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
