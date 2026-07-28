/**
 * Mockup fiel às telas reais do Psiconutri (mesmos rótulos, textos e
 * fluxo implementados no aplicativo) — renderizado como componente,
 * já que o app roda em produto separado e não há screenshot estático
 * disponível para embutir aqui.
 */
export function PhoneMockup({ screen }: { screen: "hoje" | "pausa" | "relatorio" }) {
  return (
    <div className="mx-auto w-[260px] rounded-[2.75rem] border-[10px] border-nsc-verde-profundo bg-white shadow-2xl overflow-hidden relative" style={{ boxShadow: "0 30px 60px -20px rgba(11,74,58,0.45)" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-nsc-verde-profundo rounded-b-2xl z-10" aria-hidden="true" />
      <div className="bg-nsc-creme px-4 pt-8 pb-5 h-[480px] overflow-hidden text-left">
        {screen === "hoje" && (
          <>
            <div className="flex items-center justify-between mb-1">
              <p className="font-display text-nsc-verde-profundo text-lg">Olá 👋</p>
              <span className="inline-flex items-center gap-1 text-[10px] text-nsc-verde-secundario bg-nsc-creme-secundario px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-nsc-verde-secundario" />
                7 dias grátis
              </span>
            </div>
            <p className="text-xs text-nsc-texto-secundario mb-4">terça-feira, 28 de julho</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="border rounded-lg p-2 text-center text-xs bg-white">🍽️<br />Refeição</div>
              <div className="border rounded-lg p-2 text-center text-xs bg-white">🥤<br />Bebida</div>
              <div className="border rounded-lg p-2 text-center text-xs bg-white">🍎<br />Belisco</div>
            </div>
            <div className="bg-nsc-creme-secundario rounded-lg p-3 text-xs mb-3">
              Pausa consciente — alguns segundos para perceber o que você precisa.
            </div>
            <p className="text-xs font-medium mb-1">Histórico do dia</p>
            <p className="text-xs text-nsc-texto-secundario">Arroz, feijão e salada · 12:30</p>
          </>
        )}
        {screen === "pausa" && (
          <>
            <p className="font-display text-nsc-verde-profundo text-lg mb-1">Pausa consciente</p>
            <p className="text-xs text-nsc-texto-secundario mb-4">Não é um teste de resistência.</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {["Ansiedade", "Tédio", "Tristeza", "Estresse", "Solidão", "Cansaço", "Recompensa", "Fome física", "Outro"].map((f) => (
                <div key={f} className="border rounded-lg p-2 text-center bg-white">{f}</div>
              ))}
            </div>
          </>
        )}
        {screen === "relatorio" && (
          <>
            <p className="font-display text-nsc-verde-profundo text-lg mb-1">Relatório da semana</p>
            <p className="text-[10px] text-nsc-texto-secundario mb-3">Gerado sem envio dos seus dados a IA externa.</p>
            <div className="text-xs space-y-2">
              <p><strong>Panorama:</strong> 9 registros em 5 dias.</p>
              <p><strong>Padrão em destaque:</strong> contexto &quot;trabalho&quot; mais frequente.</p>
              <p><strong>Para levar adiante:</strong> o que você percebeu sobre a fome antes das refeições?</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
