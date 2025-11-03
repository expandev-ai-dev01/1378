import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Application home page with welcome message
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @layout
 * - Layout: MainLayout
 * - Sections: Hero, Features
 * - Navigation: Main navigation
 *
 * @description
 * Landing page that introduces the medication reminder system
 * and provides navigation to main features.
 */
export const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nunca mais esqueça seus medicamentos
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sistema inteligente de lembretes para ajudar você a manter sua rotina de medicamentos em
          dia.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Começar Agora</Button>
          <Button variant="secondary" size="lg">
            Saiba Mais
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Lembretes Personalizados</h3>
          <p className="text-gray-600">
            Configure horários específicos para cada medicamento e receba notificações no momento
            certo.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Histórico Completo</h3>
          <p className="text-gray-600">
            Acompanhe todo o histórico de doses tomadas e mantenha controle total da sua medicação.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Alertas de Estoque</h3>
          <p className="text-gray-600">
            Receba avisos quando seus medicamentos estiverem acabando para nunca ficar sem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
