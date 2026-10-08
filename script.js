// Configuração das Disciplinas por Linha (Grade Curricular)
const GRADE = [
  {
    A2: "CÁLCULO COM FUNÇÕES DE UMA VARIÁVEL REAL",
    C2: "INTEGRAÇÃO E SÉRIES",
    E2: "EQUAÇÕES DIFERENCIAIS ORDINÁRIAS",
    G2: "ESTATÍSTICA",
    I2: "CLIMATOLOGIA",
    K2: "AVALIAÇÃO DA POLUIÇÃO DAS ÁGUAS SUPERFICIAIS",
    M2: "CONSTRUÇÃO, PLANEJAMENTO E CONTROLE DE OBRAS",
    O2: "TRATAMENTO DE ÁGUA PARA ABASTECIMENTO PÚBLICO",
    Q2: "GESTÃO E PLANEJAMENTO DE RECURSOS HÍDRICOS",
    S2: "INTRODUÇÃO À SOCIOLOGIA",
  },
  {
    A3: "GEOMETRIA ANALÍTICA E ÁLGEBRA LINEAR",
    C3: "CÁLCULO COM FUNÇÕES DE VÁRIAS VARIÁVEIS I",
    E3: "FUNDAMENTOS DE OSCILAÇÕES, FLUIDOS E TERMODINÂMICA",
    G3: "INSTALAÇÕES ELETRICAS",
    I3: "MECÂNICA DOS SOLOS",
    K3: "HIDROLOGIA",
    M3: "SISTEMA DE ABASTECIMENTO DE ÁGUA E ESGOTAMENTO SANITÁRIO",
    O3: "TRATAMENTO DE EFLUENTES SANITÁRIOS",
    Q3: "TRATAMENTO DE EFLUENTES INDÚSTRIAIS",
    S3: "FILOSOFIA DA TECNOLOGIA",
  },
  {
    A4: "PROGRAMAÇÃO DE COMPUTADORES I",
    C4: "FUNDAMENTOS DE MECÂNICA",
    E4: "FÍSICA EXPERIMENTAL - MOFT",
    G4: "DESENHO TÉCNICO ARQUITETÔNICO",
    I4: "TOPOGRAFIA",
    K4: "HIDRÁULICA II",
    M4: "DRENAGEM E MANEJO DE ÁGUAS PLUVIAIS",
    O4: "SAÚDE AMBIENTAL",
    Q4: "RECUPERAÇÃO DE ÁREAS DEGRADADAS",
    S4: "PSICOLOGIA APLICADA ÀS ORGANIZAÇÕES",
  },
  {
    A5: "LABORATÓRIO DE PROGRAMAÇÃO DE COMPUTADORES I",
    C5: "QUÍMICA",
    E5: "MÉTODOS NUMÉRICOS COMPUTACIONAIS",
    G5: "GEOLOGIA DE ENGENHARIA",
    I5: "HIDRÁULICA I",
    K5: "GERENCIAMENTO DE RESÍDUOS SÓLIDOS",
    M5: "AVALIAÇÃO DE IMPACTOS AMBIENTAIS",
    O5: "SISTEMA DE GESTÃO AMBIENTAL",
    Q5: "CONTROLE DA POLUIÇÃO ATMOSFÉRICA",
    S5: "EMPREENDEDORISMO E PLANO DE NEGÓCIOS",
  },
  {
    A6: "LEITURA E PRODUÇÃO DE TEXTOS ACADÊMICOS",
    C6: "LABORATÓRIO DE QUÍMICA",
    E6: "ESTRUTURA E PROPRIEDADES DE COMPOSTOS ORGÂNICOS",
    G6: "MECÂNICA E RESISTÊNCIA DOS MATERIAIS",
    I6: "PLANEJAMENTO AMBIENTAL E URBANO",
    K6: "DESENHO ASSISTIDO POR COMPUTADOR",
    M6: "LEGISLAÇÃO E LICENCIAMENTO AMBIENTAL",
    O6: "AVALIAÇÃO DA POLUIÇÃO ATMOSFÉRICA",
    Q6: "METODOLOGIA DA PESQUISA",
    S6: "GESTÃO ORGANIZACIONAL",
  },
  {
    A7: "INTRODUÇÃO À ENG. AMBIENTAL E SANITÁRIA",
    C7: "ECOLOGIA GERAL",
    E7: "MICROBIOLOGIA AMBIENTAL E SANITÁRIA",
    G7: "INTRODUÇÃO À QUÍMICA ANALÍTICA",
    I7: "MODELAGEM E ANÁLISE DE SISTEMAS AMBIENTAIS",
    K7: "MATERIAIS DE CONSTRUÇÃO CIVIL",
    M7: "INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS",
    O7: "AVALIAÇÃO E CONTROLE DA POLUIÇÃO DOS SOLOS E ÁGUAS SUBTERRÂNEAS",
    Q7: "INTRODUÇÃO À ENGENHARIA DE SEGURANÇA",
    S7: "ATIVIDADE DE TRABALHO DE CONCLUSÃO DE CURSO II",
  },
  {
    A8: "METODOLOGIA CIENTÍFICA",
    C8: "CONTEXTO SOCIAL E PROFISSIONAL DO ENG. AMBIENTAL E SANITARISTA",
    E8: "GEOPROCESSAMENTO",
    G8: "QUÍMICA ANALÍTICA EXPERIMENTAL",
    I8: "ECONOMIA E MEIO AMBIENTE",
    K8: "LABORATÓRIO DE MATERIAIS DE CONSTRUÇÃO CIVIL",
    O8: "PROJETO INTEGRADOR II",
    Q8: "ATIVIDADE DE TRABALHO DE CONCLUSÃO DE CURSO I",
  },
  {
    G9: "FENÔMENOS DE TRANSPORTE",
    K9: "PROJETO INTEGRADOR I",
    O9: "ATIVIDADE DE ESTÁGIO SUPERVISIONADO",
  },
  { O10: "ATIVIDADE DE ESTÁGIO CURRICULAR OBRIGATÓRIO" },
];

const PRE_REQUISITOS = {
  C2: ["A2"],
  C3: ["A2", "A3"],
  C4: ["A2", "A3"],
  C8: ["A7"],
  E2: ["C2", "C3"],
  E3: ["C4"],
  E4: ["C4"],
  E5: ["A4", "A5"],
  E6: ["C5"],
  E7: ["C7"],
  G2: ["C2"],
  G3: ["C3"],
  G5: ["C5", "C6"],
  G6: ["C4"],
  G7: ["C5", "C6"],
  G8: ["C5", "C6"],
  G9: ["E3"],
  I2: ["E8"],
  I3: ["G4", "G5"],
  I4: ["E8", "G4"],
  I5: ["G9"],
  I6: ["E8"],
  I7: ["E2", "E5", "G2"],
  I8: ["D7"],
  K2: ["E6", "E7", "G7", "G8"],
  K3: ["G2"],
  K4: ["G9"],
  K5: ["I3"],
  K6: ["I4"],
  K7: ["C5", "C6"],
  K8: ["C5", "C6"],
  K9: ["A8", "E7", "G7", "I6"],
  M2: ["K2", "K7"],
  M3: ["I5", "K2", "K3", "K4", "K6"],
  M4: ["K3", "K4", "K6"],
  M5: ["E8", "K2"],
  M6: ["I6"],
  M7: ["I5", "K4", "K6"],
  O2: ["M3"],
  O3: ["M3"],
  O4: ["K2", "K5"],
  O5: ["I8", "M5"],
  O6: ["E6", "G7", "G8", "I2"],
  O7: ["I3", "K2", "K4"],
  O8: ["K9", "M3", "M4", "M6"],
  Q2: ["I7", "K3", "M6"],
  Q3: ["O2", "O3"],
  Q4: ["O7"],
  Q5: ["O6"],
  S7: ["Q8"],
};

const CORREQUISITOS = {
  A4: ["A5"],
  A5: ["A4"],
  C5: ["C6"],
  C6: ["C5"],
  E3: ["E2", "E4"],
  E4: ["E2"],
  E5: ["E2"],
  G7: ["G8"],
  G8: ["G7"],
  K7: ["K8"],
  K8: ["K7"],
  O9: ["O10"],
  O10: ["O9"],
  Q6: ["Q8"],
  Q8: ["Q6"],
};

const COLUNAS = ["A", "C", "E", "G", "I", "K", "M", "O", "Q", "S"];
const CORES_VERMELHAS = [
  "#ffddd2",
  "#fca5a5",
  "#f87171",
  "#ef4444",
  "#dc2626",
  "#b91c1c",
  "#7f1d1d",
];
const CORES_ROXAS = [
  "#e0d5ff",
  "#c4b5fd",
  "#a78bfa",
  "#8b5cf6",
  "#6d28d9",
  "#4c1d95",
  "#3b0764",
];

const DEPENDENTES = {};
Object.entries(PRE_REQUISITOS).forEach(([materia, pres]) => {
  pres.forEach((pre) =>
    (DEPENDENTES[pre] = DEPENDENTES[pre] || []).push(materia)
  );
});

let materiaSelecionada = null;

// Monta o Header e as Legendas Dinamicamente
function renderizarEstrutura() {
  const trHeader = document.getElementById("header-periodos");
  COLUNAS.forEach((_, i) => {
    const th = document.createElement("th");
    th.colSpan = 2;
    th.textContent = `${i + 1}º Período`;
    trHeader.appendChild(th);
  });

  const criarQuadradosLegenda = (containerId, paleta) => {
    const container = document.getElementById(containerId);
    paleta.forEach((cor, i) => {
      const div = document.createElement("div");
      div.className = "legenda-cor";
      div.style.backgroundColor = cor;

      // Insere o número do nível (1, 2, 3...)
      const nivel = i + 1;
      div.textContent = nivel;
      div.title = `Nível ${nivel}`;

      // Se o nível for 4 ou superior (fundo escuro), muda o número para branco
      if (nivel >= 4) {
        div.style.color = "#ffffff";
      }

      container.appendChild(div);
    });
  };

  criarQuadradosLegenda("legenda-pre", CORES_VERMELHAS);
  criarQuadradosLegenda("legenda-dep", CORES_ROXAS);
}

// Monta a Tabela no HTML
function renderizarTabela() {
  const tbody = document.getElementById("corpo-tabela");

  GRADE.forEach((linhaObj, index) => {
    const tr = document.createElement("tr");
    const numLinha = index + 2; // Começa no 2 para coincidir com as coordenadas A2, C2...

    COLUNAS.forEach((col) => {
      const coord = `${col}${numLinha}`;
      const tdMateria = document.createElement("td");
      const tdInfo = document.createElement("td");

      if (linhaObj[coord]) {
        tdMateria.dataset.coord = coord;
        tdMateria.textContent = linhaObj[coord];
        tdMateria.tabIndex = 0;
        tdMateria.addEventListener("click", aoClicarMateria);
        tdMateria.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            aoClicarMateria(e);
          }
        });

        tdInfo.dataset.infoFor = coord;
      }

      tr.appendChild(tdMateria);
      tr.appendChild(tdInfo);
    });

    tbody.appendChild(tr);
  });
}

function obterRelacionamentos(coord, mapa, nivelAtual = 1, resultado = {}) {
  (mapa[coord] || []).forEach((item) => {
    if (!resultado[item] || resultado[item] < nivelAtual)
      resultado[item] = nivelAtual;
    obterRelacionamentos(item, mapa, nivelAtual + 1, resultado);
  });
  return resultado;
}

function limparSelecoes() {
  document.querySelectorAll("td[data-coord]").forEach((td) => {
    td.style.backgroundColor = "#ffffff";
    td.style.color = "#000000";
  });
  document.querySelectorAll("td[data-info-for]").forEach((td) => {
    td.textContent = "";
    td.style.backgroundColor = "#ffffff";
    td.style.color = "#000000";
  });
  materiaSelecionada = null;
}

function aplicarCores(relacionamentos, paleta) {
  Object.entries(relacionamentos).forEach(([coord, nivel]) => {
    const tdMat = document.querySelector(`td[data-coord="${coord}"]`);
    const tdInfo = document.querySelector(`td[data-info-for="${coord}"]`);
    const cor = paleta[Math.min(nivel - 1, paleta.length - 1)];

    if (tdMat) {
      tdMat.style.backgroundColor = cor;
      if (nivel >= 4) tdMat.style.color = "#ffffff";
    }
    if (tdInfo) {
      tdInfo.textContent = nivel;
      tdInfo.style.backgroundColor = cor; // Define a cor de fundo igual à da matéria
      tdInfo.style.color = nivel >= 4 ? "#ffffff" : "#000000";
    }
  });
}

function aoClicarMateria(e) {
  const coord = e.currentTarget.dataset.coord;

  if (materiaSelecionada === coord) {
    limparSelecoes();
    return;
  }

  limparSelecoes();
  materiaSelecionada = coord;

  e.currentTarget.style.backgroundColor = "#D9D9D9";

  aplicarCores(obterRelacionamentos(coord, PRE_REQUISITOS), CORES_VERMELHAS);
  aplicarCores(obterRelacionamentos(coord, DEPENDENTES), CORES_ROXAS);

  // Aplica cores e o número 0 para os co-requisitos
  (CORREQUISITOS[coord] || []).forEach((co) => {
    const tdCo = document.querySelector(`td[data-coord="${co}"]`);
    const tdInfo = document.querySelector(`td[data-info-for="${co}"]`);

    if (tdCo) {
      tdCo.style.backgroundColor = "#FFD966";
      tdCo.style.color = "#000000";
    }

    if (tdInfo) {
      tdInfo.textContent = "0";
      tdInfo.style.backgroundColor = "#FFD966"; // Deixa a caixa do 0 com o fundo amarelo
      tdInfo.style.color = "#000000";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarEstrutura();
  renderizarTabela();
});

function autoAjustarEscala() {
  const container = document.querySelector(".app-container");
  if (!container) return;

  // Reseta o scale para medir o tamanho real do layout
  container.style.transform = "scale(1)";

  // Pega a largura e altura reais do layout completo
  const larguraLayout = container.offsetWidth;
  const alturaLayout = container.offsetHeight;

  // Pega a largura e altura disponíveis da janela (com margem de segurança)
  const larguraJanela = window.innerWidth - 10;
  const alturaJanela = window.innerHeight - 10;

  // Calcula quanto precisa encolher/aumentar tanto na largura quanto na altura
  const escalaLargura = larguraJanela / larguraLayout;
  const escalaAltura = alturaJanela / alturaLayout;

  // Usa a menor escala necessária para garantir que CAIBA TUDO sem cortar nada
  const escalaFinal = Math.min(escalaLargura, escalaAltura);

  // Aplica a escala exata
  container.style.transform = `scale(${escalaFinal})`;
}

// Executa o ajuste dinâmico ao redimensionar a tela ou ao carregar a página
window.addEventListener("resize", autoAjustarEscala);
window.addEventListener("DOMContentLoaded", () => {
  autoAjustarEscala();
  // Garante o cálculo após a renderização das tabelas
  setTimeout(autoAjustarEscala, 50);
});
