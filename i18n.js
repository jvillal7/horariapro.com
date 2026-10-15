/* HorariaPro — selector d'idioma (ca / va / es)
 * El HTML està escrit en català (idioma base). Aquest script tradueix en viu
 * els textos, atributs i metadades cap a valencià (va) o castellà (es).
 *
 * Prioritat per triar idioma:
 *   1) ?lang=ca|va|es a l'URL (per als enllaços de captació)
 *   2) elecció guardada pel visitant (localStorage)
 *   3) idioma del navegador (ca-valencia → va, es → es, ca → ca)
 *   4) català per defecte
 *
 * Per afegir/corregir una traducció: edita la taula T (ca, es, va).
 */
(function () {
  'use strict';

  // [català (clau), castellà, valencià]
  var T = [
    // ── Meta / capçalera ──
    ['HorariaPro — Gestió intel·ligent de cobertures per a centres educatius', 'HorariaPro — Gestión inteligente de sustituciones para centros educativos', 'HorariaPro — Gestió intel·ligent de cobertures per a centres educatius'],
    ["HorariaPro automatitza la gestió d'absències i cobertures del professorat amb intel·ligència artificial. Dissenyat per a equips directius de centres educatius.", 'HorariaPro automatiza la gestión de ausencias y sustituciones del profesorado con inteligencia artificial. Diseñado para equipos directivos de centros educativos.', "HorariaPro automatitza la gestió d'absències i cobertures del professorat amb intel·ligència artificial. Dissenyat per a equips directius de centres educatius."],
    ['Automatitza la proposta de cobertures del professorat amb IA, notifica tothom afectat i elimina el caos de les substitucions.', 'Automatiza la propuesta de sustituciones del profesorado con IA, notifica a todos los afectados y elimina el caos de las sustituciones.', 'Automatitza la proposta de cobertures del professorat amb IA, notifica tothom afectat i elimina el caos de les substitucions.'],
    ['HorariaPro — Gestiona absències i cobertures en minuts', 'HorariaPro — Gestiona ausencias y sustituciones en minutos', 'HorariaPro — Gestiona absències i cobertures en minuts'],

    // ── Navegació ──
    ['Veure demo', 'Ver demo', 'Veure demo'],
    ['Prova gratuïta', 'Prueba gratuita', 'Prova gratuïta'],
    ['Funcionalitats', 'Funcionalidades', 'Funcionalitats'],
    ['Per què HorariaPro?', '¿Por qué HorariaPro?', 'Per què HorariaPro?'],
    ['Preus', 'Precios', 'Preus'],
    ['FAQ', 'FAQ', 'FAQ'],
    ['Privacitat', 'Privacidad', 'Privacitat'],
    ['Contacte', 'Contacto', 'Contacte'],
    ["Accedir a l'app →", 'Acceder a la app →', "Accedir a l'app →"],
    ["Tornar a l'inici", 'Volver al inicio', "Tornar a l'inici"],
    ['Obrir menú', 'Abrir menú', 'Obrir menú'],
    ['Idioma', 'Idioma', 'Idioma'],

    // ── Hero ──
    ['Gestiona absències i cobertures', 'Gestiona ausencias y sustituciones', 'Gestiona absències i cobertures'],
    ['en minuts,', 'en minutos,', 'en minuts,'],
    ['no en hores', 'no en horas', 'no en hores'],
    ["proposa cobertures, notifica tothom afectat i elimina l'estrès de cada matí.", 'propone sustituciones, notifica a todos los afectados y elimina el estrés de cada mañana.', "proposa cobertures, notifica tothom afectat i elimina l'estrès de cada matí."],
    ['Prova-ho gratis al teu centre', 'Pruébalo gratis en tu centro', 'Prova-ho gratis al teu centre'],
    ['Implantació gratuïta', 'Implantación gratuita', 'Implantació gratuïta'],
    ["Vídeo: un dia de la Laura, cap d'estudis, amb HorariaPro", 'Vídeo: un día de Laura, jefa de estudios, con HorariaPro', "Vídeo: un dia de la Laura, cap d'estudis, amb HorariaPro"],
    ['Pausar el vídeo', 'Pausar el vídeo', 'Pausar el vídeo'],
    ['Pausa', 'Pausa', 'Pausa'],
    ['Activar el so', 'Activar el sonido', 'Activar el so'],
    ['So', 'Sonido', 'So'],
    ['Obrir el vídeo a pantalla completa', 'Abrir el vídeo a pantalla completa', 'Obrir el vídeo a pantalla completa'],
    ['Pantalla completa', 'Pantalla completa', 'Pantalla completa'],

    // ── Com funciona ──
    ['Com funciona', 'Cómo funciona', 'Com funciona'],
    ["De l'avís a la cobertura en minuts", 'Del aviso a la sustitución en minutos', "De l'avís a la cobertura en minuts"],
    ["Prova l'aplicació real aquí baix — pas a pas, des de l'avís del docent fins a la confirmació per correu dels canvis d'horari als afectats. El mateix producte que ja fan servir els centres, amb dades fictícies.", 'Prueba la aplicación real aquí abajo — paso a paso, desde el aviso del docente hasta la confirmación por correo de los cambios de horario a los afectados. El mismo producto que ya usan los centros, con datos ficticios.', "Prova l'aplicació real ací baix — pas a pas, des de l'avís del docent fins a la confirmació per correu dels canvis d'horari als afectats. El mateix producte que ja fan servir els centres, amb dades fictícies."],
    ["⏱️ Comprova tu mateix quant de temps passa des de l'avís fins a la confirmació i gestió finalitzada, amb el cronòmetre de dalt a l'esquerra.", '⏱️ Comprueba tú mismo cuánto tiempo pasa desde el aviso hasta la confirmación y la gestión finalizada, con el cronómetro de arriba a la izquierda.', "⏱️ Comprova tu mateix quant de temps passa des de l'avís fins a la confirmació i gestió finalitzada, amb el cronòmetre de dalt a l'esquerra."],
    ['📱 En mòbil, toca ⛶ per veure-la en pantalla completa, o', '📱 En el móvil, toca ⛶ para verla a pantalla completa, o', '📱 En mòbil, toca ⛶ per veure-la en pantalla completa, o'],
    ['obre-la en una pestanya nova →', 'ábrela en una pestaña nueva →', 'obri-la en una pestanya nova →'],
    ['▶ Entrar al simulador', '▶ Entrar al simulador', '▶ Entrar al simulador'],
    ["S'obre a pantalla completa · pots tancar-lo quan vulguis", 'Se abre a pantalla completa · puedes cerrarlo cuando quieras', "S'obri a pantalla completa · pots tancar-lo quan vulgues"],
    ['Carregant la demo interactiva…', 'Cargando la demo interactiva…', 'Carregant la demo interactiva…'],
    ["Demo interactiva d'HorariaPro", 'Demo interactiva de HorariaPro', "Demo interactiva d'HorariaPro"],

    // ── Funcionalitats ──
    ['Les 10 funcionalitats que necessita el teu centre', 'Las 10 funcionalidades que necesita tu centro', 'Les 10 funcionalitats que necessita el teu centre'],
    ["Una sola eina per a tota la gestió d'absències, cobertures i horaris de tot el claustre.", 'Una sola herramienta para toda la gestión de ausencias, sustituciones y horarios de todo el claustro.', "Una sola eina per a tota la gestió d'absències, cobertures i horaris de tot el claustre."],

    ["Avís d'absència des del mòbil", 'Aviso de ausencia desde el móvil', "Avís d'absència des del mòbil"],
    ["Senzill i ràpid — els docents ho adopten sense formació. Centralitza tots els avisos (WhatsApp, correu electrònic, trucades) en un sol canal per a la cap d'estudis.", 'Sencillo y rápido — los docentes lo adoptan sin formación. Centraliza todos los avisos (WhatsApp, correo electrónico, llamadas) en un único canal para la jefatura de estudios.', "Senzill i ràpid — els docents ho adopten sense formació. Centralitza tots els avisos (WhatsApp, correu electrònic, trucades) en un sol canal per a la cap d'estudis."],
    ["La cap d'estudis també pot avisar i gestionar l'absència directament des d'Horaria, de dues maneres: amb", 'La jefatura de estudios también puede avisar y gestionar la ausencia directamente desde Horaria, de dos maneras: con', "La cap d'estudis també pot avisar i gestionar l'absència directament des d'Horaria, de dues maneres: amb"],
    ['Informació extra del dia', 'Información extra del día', 'Informació extra del dia'],
    [', afegint context sense registrar encara la cobertura, o amb', ', añadiendo contexto sin registrar todavía la sustitución, o con', ', afegint context sense registrar encara la cobertura, o amb'],
    ['Cobertura manual', 'Sustitución manual', 'Cobertura manual'],
    [', registrant-la ella mateixa des del primer moment.', ', registrándola ella misma desde el primer momento.', ', registrant-la ella mateixa des del primer moment.'],
    ['Docent avisa', 'El docente avisa', 'Docent avisa'],
    ["Des de l'app", 'Desde la app', "Des de l'app"],
    ['Per WhatsApp', 'Por WhatsApp', 'Per WhatsApp'],
    ["Cap d'estudis avisa", 'La jefatura de estudios avisa', "Cap d'estudis avisa"],
    ["Avís d'absència des de l'app", 'Aviso de ausencia desde la app', "Avís d'absència des de l'app"],
    ["Avís d'absència per WhatsApp", 'Aviso de ausencia por WhatsApp', "Avís d'absència per WhatsApp"],
    ["Informació extra del dia registrada per la cap d'estudis", 'Información extra del día registrada por la jefatura de estudios', "Informació extra del dia registrada per la cap d'estudis"],
    ["Cobertura manual registrada per la cap d'estudis", 'Sustitución manual registrada por la jefatura de estudios', "Cobertura manual registrada per la cap d'estudis"],

    ['Proposta de cobertures amb IA', 'Propuesta de sustituciones con IA', 'Proposta de cobertures amb IA'],
    ["La IA fa el 90 % de la feina intel·lectual. Analitza horaris, deutes de TP i normes del centre per proposar qui cobreix cada franja. El 10 % restant és la teva confirmació.", 'La IA hace el 90 % del trabajo intelectual. Analiza horarios, deudas de TP y normas del centro para proponer quién cubre cada franja. El 10 % restante es tu confirmación.', "La IA fa el 90 % de la feina intel·lectual. Analitza horaris, deutes de TP i normes del centre per a proposar qui cobreix cada franja. El 10 % restant és la teua confirmació."],
    ["Amb el Chat Horaria, l'assistent expert en cobertures, explica-li qui s'absenta i la IA raona en veu alta: consulta els horaris, comprova els deutes de TP i proposa qui cobreix cada franja.", 'Con el Chat Horaria, el asistente experto en sustituciones, cuéntale quién se ausenta y la IA razona en voz alta: consulta los horarios, comprueba las deudas de TP y propone quién cubre cada franja.', "Amb el Chat Horaria, l'assistent expert en cobertures, explica-li qui s'absenta i la IA raona en veu alta: consulta els horaris, comprova els deutes de TP i proposa qui cobreix cada franja."],
    ['Conversa natural:', 'Conversación natural:', 'Conversa natural:'],
    ['"i si en Carles no pot?" — la IA respon i recalcula.', '"¿y si Carlos no puede?" — la IA responde y recalcula.', '"i si en Carles no pot?" — la IA respon i recalcula.'],
    ['Un clic per aplicar:', 'Un clic para aplicar:', 'Un clic per a aplicar:'],
    ["la proposta es registra directament a l'app.", 'la propuesta se registra directamente en la app.', "la proposta es registra directament a l'app."],
    ['Notificació automàtica:', 'Notificación automática:', 'Notificació automàtica:'],
    ['les persones afectades pels canvis queden notificades per correu electrònic, amb els canvis i el que han de fer.', 'las personas afectadas por los cambios quedan notificadas por correo electrónico, con los cambios y lo que deben hacer.', 'les persones afectades pels canvis queden notificades per correu electrònic, amb els canvis i el que han de fer.'],
    ['Chat Horaria — proposta de cobertures amb IA', 'Chat Horaria — propuesta de sustituciones con IA', 'Chat Horaria — proposta de cobertures amb IA'],

    ['Graella grups × franges', 'Cuadrícula grupos × franjas', 'Graella grups × franges'],
    ["La visió exacta que necessita la cap d'estudis a primera hora del matí: tots els grups, totes les franges, d'un cop d'ull. Veus immediatament quins grups queden sense cobrir.", 'La visión exacta que necesita la jefatura de estudios a primera hora de la mañana: todos los grupos, todas las franjas, de un vistazo. Ves de inmediato qué grupos quedan sin cubrir.', "La visió exacta que necessita la cap d'estudis a primera hora del matí: tots els grups, totes les franges, d'un colp d'ull. Veus immediatament quins grups queden sense cobrir."],
    ['Graella amb tots els grups resolts', 'Cuadrícula con todos los grupos resueltos', 'Graella amb tots els grups resolts'],
    ['Graella amb els grups per resoldre', 'Cuadrícula con los grupos por resolver', 'Graella amb els grups per resoldre'],

    ["Registre d'absències i informes", 'Registro de ausencias e informes', "Registre d'absències i informes"],
    ['Classificació per criteris ATRI. Genera registre automàtic mensual i anual en format visual, amb taules i gràfiques. També es pot descarregar en format PDF o Excel per a la PGA, presa de decisions i inspeccions.', 'Clasificación por criterios ATRI. Genera registro automático mensual y anual en formato visual, con tablas y gráficos. También se puede descargar en formato PDF o Excel para la PGA, la toma de decisiones e inspecciones.', 'Classificació per criteris ATRI. Genera registre automàtic mensual i anual en format visual, amb taules i gràfiques. També es pot descarregar en format PDF o Excel per a la PGA, presa de decisions i inspeccions.'],
    ["📄 Veure PDF d'exemple", '📄 Ver PDF de ejemplo', "📄 Veure PDF d'exemple"],
    ["📊 Descarregar Excel d'exemple", '📊 Descargar Excel de ejemplo', "📊 Descarregar Excel d'exemple"],
    ["Historial d'absències i informes", 'Historial de ausencias e informes', "Historial d'absències i informes"],

    ['Gestió del personal substitut', 'Gestión del personal sustituto', 'Gestió del personal substitut'],
    ["HorarIAPro digitalitza l'horari diari i setmanal, sempre a mà per a tot el claustre. La cap d'estudis edita els horaris i els canvis s'actualitzen a l'instant, de manera que qualsevol membre interí o substitut té accés al seu horari actualitzat des del primer minut a l'escola. Així, tot el claustre disposa sempre de la versió més recent, des de qualsevol dispositiu.", 'HorarIAPro digitaliza el horario diario y semanal, siempre a mano para todo el claustro. La jefatura de estudios edita los horarios y los cambios se actualizan al instante, de modo que cualquier miembro interino o sustituto tiene acceso a su horario actualizado desde el primer minuto en el centro. Así, todo el claustro dispone siempre de la versión más reciente, desde cualquier dispositivo.', "HorarIAPro digitalitza l'horari diari i setmanal, sempre a mà per a tot el claustre. La cap d'estudis edita els horaris i els canvis s'actualitzen a l'instant, de manera que qualsevol membre interí o substitut té accés al seu horari actualitzat des del primer minut a l'escola. Així, tot el claustre disposa sempre de la versió més recent, des de qualsevol dispositiu."],
    ["També es pot descarregar en format PDF per tenir l'última versió del teu horari enganxada a la teva aula.", 'También se puede descargar en formato PDF para tener la última versión de tu horario pegada en tu aula.', "També es pot descarregar en format PDF per a tindre l'última versió del teu horari penjada a la teua aula."],
    ['Horari del personal substitut', 'Horario del personal sustituto', 'Horari del personal substitut'],

    ['Seguiment de deutes de TP', 'Seguimiento de deudas de TP', 'Seguiment de deutes de TP'],
    ['Tant la cap d\'estudis com cada docent tenen control total sobre el Treball Personal acumulat. HorarIA el té en compte per repartir cobertures de forma equitativa.', 'Tanto la jefatura de estudios como cada docente tienen control total sobre el Trabajo Personal acumulado. HorarIA lo tiene en cuenta para repartir las sustituciones de forma equitativa.', "Tant la cap d'estudis com cada docent tenen control total sobre el Treball Personal acumulat. HorarIA el té en compte per a repartir cobertures de forma equitativa."],
    ['Com ho veu la docent', 'Cómo lo ve el docente', 'Com ho veu la docent'],
    ["Com ho veu la cap d'estudis", 'Cómo lo ve la jefatura de estudios', "Com ho veu la cap d'estudis"],
    ['Deutes de TP vistos pel docent', 'Deudas de TP vistas por el docente', 'Deutes de TP vistos pel docent'],
    ["Deutes de TP vistos per la cap d'estudis", 'Deudas de TP vistas por la jefatura de estudios', "Deutes de TP vistos per la cap d'estudis"],

    ['Gestió de sortides i acompanyants', 'Gestión de salidas y acompañantes', 'Gestió de sortides i acompanyants'],
    ["Organitza qui acompanya una sortida i gestiona automàticament les cobertures dels mestres que aquella sortida genera al centre.", 'Organiza quién acompaña una salida y gestiona automáticamente las sustituciones de los maestros que esa salida genera en el centro.', "Organitza qui acompanya una eixida i gestiona automàticament les cobertures dels mestres que aquella eixida genera al centre."],
    ['Hi ha dues categories d\'acompanyants a les sortides:', 'Hay dos categorías de acompañantes en las salidas:', "Hi ha dues categories d'acompanyants a les eixides:"],
    ['Millor opció:', 'Mejor opción:', 'Millor opció:'],
    ['docents que estan amb el grup durant el dia de la sortida.', 'docentes que están con el grupo durante el día de la salida.', "docents que estan amb el grup durant el dia de l'eixida."],
    ['Per afinitat setmanal:', 'Por afinidad semanal:', 'Per afinitat setmanal:'],
    ['docents que al llarg de la setmana entren i treballen amb el grup.', 'docentes que a lo largo de la semana entran y trabajan con el grupo.', 'docents que al llarg de la setmana entren i treballen amb el grup.'],
    ['Gestió de sortides i acompanyants', 'Gestión de salidas y acompañantes', 'Gestió d\'eixides i acompanyants'],

    ['Torns de pati', 'Turnos de patio', 'Torns de pati'],
    ["Cada docent veu els seus torns de pati de la setmana des del mòbil. Com a cap d'estudis pots configurar l'assignació setmanal en un sol lloc amb ajuda de la IA. Els torns s'actualitzen per cada baixa/substitut que entra a l'escola automàticament.", 'Cada docente ve sus turnos de patio de la semana desde el móvil. Como jefatura de estudios puedes configurar la asignación semanal en un solo lugar con ayuda de la IA. Los turnos se actualizan automáticamente por cada baja/sustituto que entra en el centro.', "Cada docent veu els seus torns de pati de la setmana des del mòbil. Com a cap d'estudis pots configurar l'assignació setmanal en un sol lloc amb ajuda de la IA. Els torns s'actualitzen per cada baixa/substitut que entra a l'escola automàticament."],
    ['Vista de la docent', 'Vista del docente', 'Vista de la docent'],
    ["Vista de la cap d'estudis", 'Vista de la jefatura de estudios', "Vista de la cap d'estudis"],
    ['Torns de pati vistos per la docent', 'Turnos de patio vistos por el docente', 'Torns de pati vistos per la docent'],
    ["Torns de pati vistos per la cap d'estudis", 'Turnos de patio vistos por la jefatura de estudios', "Torns de pati vistos per la cap d'estudis"],

    ['Compactació per jornada intensiva', 'Compactación por jornada intensiva', 'Compactació per jornada intensiva'],
    ['Beta', 'Beta', 'Beta'],
    ["Genera automàticament els horaris compactats per a les jornades intensives d'inici i fi de curs, sense haver-los de recalcular manualment. Permet establir normes, pautes i regles noves personalitzades.", 'Genera automáticamente los horarios compactados para las jornadas intensivas de inicio y fin de curso, sin tener que recalcularlos manualmente. Permite establecer normas, pautas y reglas nuevas personalizadas.', "Genera automàticament els horaris compactats per a les jornades intensives d'inici i fi de curs, sense haver-los de recalcular manualment. Permet establir normes, pautes i regles noves personalitzades."],
    ['Regles i normes', 'Reglas y normas', 'Regles i normes'],
    ['Generació IA', 'Generación IA', 'Generació IA'],
    ['Regles de compactació per jornada intensiva', 'Reglas de compactación por jornada intensiva', 'Regles de compactació per jornada intensiva'],

    ['Gestió de baixes, curtes i llargues', 'Gestión de bajas, cortas y largas', 'Gestió de baixes, curtes i llargues'],
    ["Registra qui està de baixa —d'un dia o de mesos— amb data d'inici i data de fi prevista. Assigna un substitut o substituta i la IA li genera l'horari i les cobertures com si fos el titular o la titular, des del primer dia.", 'Registra quién está de baja —de un día o de meses— con fecha de inicio y fecha de fin prevista. Asigna un sustituto o sustituta y la IA le genera el horario y las sustituciones como si fuera el titular, desde el primer día.', "Registra qui està de baixa —d'un dia o de mesos— amb data d'inici i data de fi prevista. Assigna un substitut o substituta i la IA li genera l'horari i les cobertures com si fos el titular o la titular, des del primer dia."],
    ["El substitut o substituta accedeix a l'aplicació amb el seu propi correu XTEC des del moment en què es dona d'alta la baixa, sense cap gestió manual addicional. Quan el titular es reincorpora, tanques la baixa i tot queda registrat automàticament a l'apartat d'Historial.", 'El sustituto o sustituta accede a la aplicación con su propio correo corporativo desde el momento en que se da de alta la baja, sin ninguna gestión manual adicional. Cuando el titular se reincorpora, cierras la baja y todo queda registrado automáticamente en el apartado de Historial.', "El substitut o substituta accedeix a l'aplicació amb el seu propi correu corporatiu des del moment en què es dona d'alta la baixa, sense cap gestió manual addicional. Quan el titular es reincorpora, tanques la baixa i tot queda registrat automàticament a l'apartat d'Historial."],
    ['Panell de registre i gestió', 'Panel de registro y gestión', 'Panell de registre i gestió'],
    ['Sistema de nova baixa', 'Sistema de nueva baja', 'Sistema de nova baixa'],
    ['Panell de registre i gestió de baixes', 'Panel de registro y gestión de bajas', 'Panell de registre i gestió de baixes'],

    // ── Perfils ──
    ['Tria el teu perfil', 'Elige tu perfil', 'Tria el teu perfil'],
    ["Descobreix en un clic com t'ajuda HorariaPro segons el teu rol al centre.", 'Descubre en un clic cómo te ayuda HorariaPro según tu rol en el centro.', "Descobreix en un clic com t'ajuda HorariaPro segons el teu rol al centre."],
    ["Com a cap d'estudis...", 'Como jefatura de estudios...', "Com a cap d'estudis..."],
    ['Com a equip directiu...', 'Como equipo directivo...', 'Com a equip directiu...'],
    ['Com a docent...', 'Como docente...', 'Com a docent...'],
    ["Com a cap d'estudis", 'Como jefatura de estudios', "Com a cap d'estudis"],
    ["Oblida't dels papers i les trucades", 'Olvídate de los papeles y las llamadas', "Oblida't dels papers i les trucades"],
    ["El primer generador d'horaris que et retorna les tardes lliures.", 'El primer generador de horarios que te devuelve las tardes libres.', "El primer generador d'horaris que et retorna les vesprades lliures."],
    ["Rep l'avís, consulta la proposta de la IA i confirma la cobertura en dos clics. HorariaPro fa la feina administrativa perquè tu et puguis centrar en la pedagògica.", 'Recibe el aviso, consulta la propuesta de la IA y confirma la sustitución en dos clics. HorariaPro hace el trabajo administrativo para que tú puedas centrarte en el pedagógico.', "Rep l'avís, consulta la proposta de la IA i confirma la cobertura en dos clics. HorariaPro fa la feina administrativa perquè tu et pugues centrar en la pedagògica."],
    ["Rep el correu d'avís en el moment que el docent envia l'absència", 'Recibe el correo de aviso en el momento en que el docente envía la ausencia', "Rep el correu d'avís en el moment que el docent envia l'absència"],
    ['La IA proposa qui cobreix cada franja segons les normes del centre', 'La IA propone quién cubre cada franja según las normas del centro', 'La IA proposa qui cobreix cada franja segons les normes del centre'],
    ['Confirma o modifica la proposta amb un sol clic', 'Confirma o modifica la propuesta con un solo clic', 'Confirma o modifica la proposta amb un sol clic'],
    ['Els docents afectats reben la notificació automàticament', 'Los docentes afectados reciben la notificación automáticamente', 'Els docents afectats reben la notificació automàticament'],
    ['Defineix les teves pròpies normes de cobertura per a la IA', 'Define tus propias normas de sustitución para la IA', 'Defineix les teues pròpies normes de cobertura per a la IA'],
    ['Gestiona horaris i altes/baixes de personal des de l\'app', 'Gestiona horarios y altas/bajas de personal desde la app', "Gestiona horaris i altes/baixes de personal des de l'app"],
    ["100 % al navegador — ni tu ni cap docent heu d'instal·lar res. Funciona des del mòbil, la tauleta o l'ordinador, en línia.", '100 % en el navegador — ni tú ni ningún docente tenéis que instalar nada. Funciona desde el móvil, la tableta o el ordenador, en línea.', "100 % al navegador — ni tu ni cap docent heu d'instal·lar res. Funciona des del mòbil, la tauleta o l'ordinador, en línia."],
    ['Guia HorariaPro', 'Guía HorariaPro', 'Guia HorariaPro'],
    ['Com organitzar les cobertures del professorat — guia completa', 'Cómo organizar las sustituciones del profesorado — guía completa', 'Com organitzar les cobertures del professorat — guia completa'],

    ['Com a equip directiu', 'Como equipo directivo', 'Com a equip directiu'],
    ['Visibilitat total del centre en temps real', 'Visibilidad total del centro en tiempo real', 'Visibilitat total del centre en temps real'],
    ["Director/a i secretaria tenen accés als informes d'absències, el registre de cobertures i els deutes de TP de tot el claustre.", 'Dirección y secretaría tienen acceso a los informes de ausencias, el registro de sustituciones y las deudas de TP de todo el claustro.', "Director/a i secretaria tenen accés als informes d'absències, el registre de cobertures i els deutes de TP de tot el claustre."],
    ["Resum diari, setmanal, mensual i anual de l'estat del centre", 'Resumen diario, semanal, mensual y anual del estado del centro', "Resum diari, setmanal, mensual i anual de l'estat del centre"],
    ['Historial complet per docent, motiu i data', 'Historial completo por docente, motivo y fecha', 'Historial complet per docent, motiu i data'],
    ['Control de permisos ATRI amb avís integrat al formulari', 'Control de permisos ATRI con aviso integrado en el formulario', 'Control de permisos ATRI amb avís integrat al formulari'],
    ['Registre de justificants mèdics requerits', 'Registro de justificantes médicos requeridos', 'Registre de justificants mèdics requerits'],
    ["Accés al panell d'administració de normes de la IA", 'Acceso al panel de administración de normas de la IA', "Accés al panell d'administració de normes de la IA"],
    ["Tot en un mateix lloc, en format PDF o Excel per complementar les dades per a la inspecció o per elaborar la memòria del curs", 'Todo en un mismo lugar, en formato PDF o Excel para complementar los datos para la inspección o para elaborar la memoria del curso', "Tot en un mateix lloc, en format PDF o Excel per a complementar les dades per a la inspecció o per a elaborar la memòria del curs"],

    ['Com a docent', 'Como docente', 'Com a docent'],
    ['Avisar una absència: 30 segons des del mòbil', 'Avisar de una ausencia: 30 segundos desde el móvil', 'Avisar una absència: 30 segons des del mòbil'],
    ["Sense trucades, sense paper, sense esperar. El docent selecciona les franges, el motiu i envia. Punt.", 'Sin llamadas, sin papel, sin esperar. El docente selecciona las franjas, el motivo y envía. Punto.', "Sense trucades, sense paper, sense esperar. El docent selecciona les franges, el motiu i envia. Punt."],
    ['Formulari simplificat, accessible des de qualsevol dispositiu', 'Formulario simplificado, accesible desde cualquier dispositivo', 'Formulari simplificat, accessible des de qualsevol dispositiu'],
    ['Consulta les teves cobertures del dia en temps real', 'Consulta tus sustituciones del día en tiempo real', 'Consulta les teues cobertures del dia en temps real'],
    ['Historial de les teves absències i deutes de TP', 'Historial de tus ausencias y deudas de TP', 'Historial de les teues absències i deutes de TP'],
    ['Avís automàtic si el motiu requereix gestió per ATRI', 'Aviso automático si el motivo requiere gestión por ATRI', 'Avís automàtic si el motiu requereix gestió per ATRI'],
    ['Accés directe amb enllaç personalitzat per escola', 'Acceso directo con enlace personalizado por centro', 'Accés directe amb enllaç personalitzat per escola'],

    // ── Preus ──
    ['Sense permanència. Sense sorpreses.', 'Sin permanencia. Sin sorpresas.', 'Sense permanència. Sense sorpreses.'],
    ['Paga 10 mesos · Juliol i agost, gratis · Suport directe inclòs · Cancel·la quan vulguis. Preus sense IVA (21 % a la factura).', 'Paga 10 meses · Julio y agosto, gratis · Soporte directo incluido · Cancela cuando quieras. Precios sin IVA (21 % en la factura).', 'Paga 10 mesos · Juliol i agost, gratis · Suport directe inclòs · Cancel·la quan vulgues. Preus sense IVA (21 % a la factura).'],
    ['Període de facturació', 'Período de facturación', 'Període de facturació'],
    ['Mensual', 'Mensual', 'Mensual'],
    ['Anual', 'Anual', 'Anual'],
    ['1 sola factura', '1 sola factura', '1 sola factura'],
    ['Gratuït', 'Gratuito', 'Gratuït'],
    ['3 mesos o 90 propostes IA — el que arribi primer', '3 meses o 90 propuestas IA — lo que llegue primero', '3 mesos o 90 propostes IA — el que arribe primer'],
    ['✓ Sense introduir la targeta de crèdit', '✓ Sin introducir la tarjeta de crédito', '✓ Sense introduir la targeta de crèdit'],
    ['Proposta de cobertures amb IA (90 u.)', 'Propuesta de sustituciones con IA (90 u.)', 'Proposta de cobertures amb IA (90 u.)'],
    ['Notificacions automàtiques amb Gmail (XTEC)', 'Notificaciones automáticas con Gmail', 'Notificacions automàtiques amb Gmail'],
    ['Normes i context IA personalitzat', 'Normas y contexto IA personalizado', 'Normes i context IA personalitzat'],
    ["Historial i informes d'absències (ATRI)", 'Historial e informes de ausencias (ATRI)', "Historial i informes d'absències (ATRI)"],
    ['Suport 24 h', 'Soporte 24 h', 'Suport 24 h'],
    ['Gestió dels torns del pati (3 u.)', 'Gestión de los turnos de patio (3 u.)', 'Gestió dels torns del pati (3 u.)'],
    ['Gestió de sortides amb acompanyants (10 u.)', 'Gestión de salidas con acompañantes (10 u.)', "Gestió d'eixides amb acompanyants (10 u.)"],
    ['Gestió del Treball Personal (10 u.)', 'Gestión del Trabajo Personal (10 u.)', 'Gestió del Treball Personal (10 u.)'],
    ['⚡ Integra HorariaPro ara mateix', '⚡ Integra HorariaPro ahora mismo', '⚡ Integra HorariaPro ara mateix'],
    ["EL PLA S'ADAPTA A LA TEVA PLANTILLA", 'EL PLAN SE ADAPTA A TU PLANTILLA', "EL PLA S'ADAPTA A LA TEUA PLANTILLA"],
    ['Estàndard', 'Estándar', 'Estàndard'],
    ['/mes + IVA', '/mes + IVA', '/mes + IVA'],
    ['/any + IVA', '/año + IVA', '/any + IVA'],
    ["Es cobra 10 mesos a l'any · juliol i agost, gratis", 'Se cobra 10 meses al año · julio y agosto, gratis', "Es cobra 10 mesos a l'any · juliol i agost, gratis"],
    ['Un sol pagament i una sola factura · juliol i agost inclosos', 'Un solo pago y una sola factura · julio y agosto incluidos', 'Un sol pagament i una sola factura · juliol i agost inclosos'],
    ['€/professional de mitjana', '€/profesional de media', '€/professional de mitjana'],
    ['€/professional i any', '€/profesional y año', '€/professional i any'],
    ['professionals', 'profesionales', 'professionals'],
    ['Fins a 25', 'Hasta 25', 'Fins a 25'],
    ['Gestió dels torns del pati', 'Gestión de los turnos de patio', 'Gestió dels torns del pati'],
    ['Gestió de sortides amb acompanyants', 'Gestión de salidas con acompañantes', "Gestió d'eixides amb acompanyants"],
    ['Gestió del Treball Personal', 'Gestión del Trabajo Personal', 'Gestió del Treball Personal'],
    ["Gestió d'horaris de jornada intensiva", 'Gestión de horarios de jornada intensiva', "Gestió d'horaris de jornada intensiva"],
    ['Chat HorarIA per WhatsApp', 'Chat HorarIA por WhatsApp', 'Chat HorarIA per WhatsApp'],
    ['Sol·licitar demo →', 'Solicitar demo →', 'Sol·licitar demo →'],
    ['⚡ Integra ara', '⚡ Integra ahora', '⚡ Integra ara'],
    ['Preguntes freqüents', 'Preguntas frecuentes', 'Preguntes freqüents'],
    ['Resolem els teus dubtes', 'Resolvemos tus dudas', 'Resolem els teus dubtes'],
    ['Si en tens més, escriu-nos — responem en menys de 24 h.', 'Si tienes más, escríbenos — respondemos en menos de 24 h.', 'Si en tens més, escriu-nos — responem en menys de 24 h.'],

    // ── FAQ ──
    ['Cal instal·lar alguna cosa?', '¿Hay que instalar algo?', 'Cal instal·lar alguna cosa?'],
    ["No. Funciona 100 % al navegador, des del mòbil, la tauleta o l'ordinador. Ni la cap d'estudis ni el professorat han d'instal·lar res.", 'No. Funciona 100 % en el navegador, desde el móvil, la tableta o el ordenador. Ni la jefatura de estudios ni el profesorado tienen que instalar nada.', "No. Funciona 100 % al navegador, des del mòbil, la tauleta o l'ordinador. Ni la cap d'estudis ni el professorat han d'instal·lar res."],
    ['Com accedeixen els docents? Necessiten contrasenya?', '¿Cómo acceden los docentes? ¿Necesitan contraseña?', 'Com accedeixen els docents? Necessiten contrasenya?'],
    ["Cada docent entra amb el seu correu XTEC o corporatiu del centre (si en teniu). Sense comptes externs ni contrasenyes innecessàries.", 'Cada docente entra con su correo corporativo del centro (o el correo educativo de su administración). Sin cuentas externas ni contraseñas innecesarias.', "Cada docent entra amb el seu correu corporatiu del centre (o el correu educatiu de la seua administració). Sense comptes externs ni contrasenyes innecessàries."],
    ['Què passa amb les nostres dades si deixem d\'utilitzar HorariaPro?', '¿Qué pasa con nuestros datos si dejamos de utilizar HorariaPro?', "Què passa amb les nostres dades si deixem d'utilitzar HorariaPro?"],
    ["Tens dret a l'oblit: pots sol·licitar l'eliminació completa de totes les dades del centre en qualsevol moment.", 'Tienes derecho al olvido: puedes solicitar la eliminación completa de todos los datos del centro en cualquier momento.', "Tens dret a l'oblit: pots sol·licitar l'eliminació completa de totes les dades del centre en qualsevol moment."],
    ["On s'emmagatzemen les dades?", '¿Dónde se almacenan los datos?', "On s'emmagatzemen les dades?"],
    ["A servidors europeus (EU-West), seguint el RGPD i el reglament del Departament d'Educació. Cap dada surt de la Unió Europea.", 'En servidores europeos (EU-West), siguiendo el RGPD y la normativa de la administración educativa. Ningún dato sale de la Unión Europea.', "A servidors europeus (EU-West), seguint el RGPD i la normativa de l'administració educativa. Cap dada ix de la Unió Europea."],
    ['Quant triga la implantació?', '¿Cuánto tarda la implantación?', 'Quant tarda la implantació?'],
    ["Entre uns dies i una setmana com a màxim, depenent de la mida del claustre (docents, educadors i altre personal). La implantació és gratuïta i inclou suport directe per configurar horaris i normes de cobertura.", 'Entre unos días y una semana como máximo, dependiendo del tamaño del claustro (docentes, educadores y otro personal). La implantación es gratuita e incluye soporte directo para configurar horarios y normas de sustitución.', "Entre uns dies i una setmana com a màxim, depenent de la mida del claustre (docents, educadors i altre personal). La implantació és gratuïta i inclou suport directe per a configurar horaris i normes de cobertura."],
    ['És compatible amb altres eines que ja utilitzem al centre?', '¿Es compatible con otras herramientas que ya utilizamos en el centro?', 'És compatible amb altres eines que ja utilitzem al centre?'],
    ["Sí. HorariaPro funciona de manera complementària a l'ecosistema de Google Workspace for Education (Gmail, Calendar) que ja fan servir la majoria de centres: les notificacions arriben directament al vostre correu, sense duplicar informació ni canviar cap altra eina.", 'Sí. HorariaPro funciona de manera complementaria al ecosistema de Google Workspace for Education (Gmail, Calendar) que ya usan la mayoría de centros: las notificaciones llegan directamente a vuestro correo, sin duplicar información ni cambiar ninguna otra herramienta.', "Sí. HorariaPro funciona de manera complementària a l'ecosistema de Google Workspace for Education (Gmail, Calendar) que ja fan servir la majoria de centres: les notificacions arriben directament al vostre correu, sense duplicar informació ni canviar cap altra eina."],
    ['Com decideix la IA qui cobreix cada franja?', '¿Cómo decide la IA quién cubre cada franja?', 'Com decideix la IA qui cobreix cada franja?'],
    ["Analitza horaris disponibles i deutes de Treball Personal (TP) acumulats, combinant-ho amb les normes de cobertura i el context personalitzat que cada centre defineix per a la IA — sempre repartint les cobertures de manera equitativa.", 'Analiza los horarios disponibles y las deudas de Trabajo Personal (TP) acumuladas, combinándolo con las normas de sustitución y el contexto personalizado que cada centro define para la IA — siempre repartiendo las sustituciones de manera equitativa.', "Analitza horaris disponibles i deutes de Treball Personal (TP) acumulats, combinant-ho amb les normes de cobertura i el context personalitzat que cada centre defineix per a la IA — sempre repartint les cobertures de manera equitativa."],
    ['I si la proposta de la IA no és la que voldríem?', '¿Y si la propuesta de la IA no es la que querríamos?', 'I si la proposta de la IA no és la que voldríem?'],
    ['La cap d\'estudis pot editar-la abans de confirmar-la — és una proposta, no una decisió automàtica. A més, amb el Chat Horaria pots conversar directament amb la IA per afinar-la o corregir-la ("i si en Carles no pot?"), d\'una manera senzilla i intuïtiva.', 'La jefatura de estudios puede editarla antes de confirmarla — es una propuesta, no una decisión automática. Además, con el Chat Horaria puedes conversar directamente con la IA para afinarla o corregirla ("¿y si Carlos no puede?"), de una manera sencilla e intuitiva.', 'La cap d\'estudis pot editar-la abans de confirmar-la — és una proposta, no una decisió automàtica. A més, amb el Chat Horaria pots conversar directament amb la IA per a afinar-la o corregir-la ("i si en Carles no pot?"), d\'una manera senzilla i intuïtiva.'],
    ['Hi ha permanència o costos ocults?', '¿Hay permanencia o costes ocultos?', 'Hi ha permanència o costos ocults?'],
    ["No. Sense permanència, sense cost d'implantació, i es pot cancel·lar quan es vulgui.", 'No. Sin permanencia, sin coste de implantación, y se puede cancelar cuando se quiera.', "No. Sense permanència, sense cost d'implantació, i es pot cancel·lar quan es vulga."],
    ['Funciona per a instituts, o només per a primària?', '¿Funciona para institutos, o solo para primaria?', 'Funciona per a instituts, o només per a primària?'],
    ["Funciona per a qualsevol centre educatiu, sigui quin sigui el nivell: escoles d'educació infantil, CEIP o instituts.", 'Funciona para cualquier centro educativo, sea cual sea el nivel: escuelas de educación infantil, CEIP o institutos.', "Funciona per a qualsevol centre educatiu, siga quin siga el nivell: escoles d'educació infantil, CEIP o instituts."],

    // ── Privacitat ──
    ['Privacitat i compliment legal', 'Privacidad y cumplimiento legal', 'Privacitat i compliment legal'],
    ['Dissenyat per complir el RGPD', 'Diseñado para cumplir el RGPD', 'Dissenyat per a complir el RGPD'],
    ['Les dades dels teus docents estan protegides i gestionades d\'acord amb la normativa europea de protecció de dades.', 'Los datos de tus docentes están protegidos y gestionados de acuerdo con la normativa europea de protección de datos.', "Les dades dels teus docents estan protegides i gestionades d'acord amb la normativa europea de protecció de dades."],
    ['El', 'El', 'El'],
    ['RGPD (Reglament General de Protecció de Dades)', 'RGPD (Reglamento General de Protección de Datos)', 'RGPD (Reglament General de Protecció de Dades)'],
    ["és la llei europea que obliga qualsevol servei que tracti dades personals —com els noms, horaris o correus dels docents— a protegir-les, a explicar clarament per a què s'utilitzen i a garantir que el centre en manté sempre el control: pot consultar-les, corregir-les o demanar-ne l'eliminació en qualsevol moment. HorariaPro compleix aquesta llei des del disseny, no com un afegit.", 'es la ley europea que obliga a cualquier servicio que trate datos personales —como los nombres, horarios o correos de los docentes— a protegerlos, a explicar claramente para qué se utilizan y a garantizar que el centro mantiene siempre el control: puede consultarlos, corregirlos o pedir su eliminación en cualquier momento. HorariaPro cumple esta ley desde el diseño, no como un añadido.', "és la llei europea que obliga qualsevol servei que tracte dades personals —com els noms, horaris o correus dels docents— a protegir-les, a explicar clarament per a què s'utilitzen i a garantir que el centre en manté sempre el control: pot consultar-les, corregir-les o demanar-ne l'eliminació en qualsevol moment. HorariaPro compleix aquesta llei des del disseny, no com un afegit."],
    ['🇪🇺 Dades a Europa', '🇪🇺 Datos en Europa', '🇪🇺 Dades a Europa'],
    ['Tota la informació s\'emmagatzema a servidors europeus (EU-West). Cap dada surt de la Unió Europea.', 'Toda la información se almacena en servidores europeos (EU-West). Ningún dato sale de la Unión Europea.', "Tota la informació s'emmagatzema a servidors europeus (EU-West). Cap dada ix de la Unió Europea."],
    ['🔑 Accés amb Google (XTEC)', '🔑 Acceso con Google', '🔑 Accés amb Google'],
    ['Cada docent hi accedeix amb el seu compte corporatiu de Google del centre o el correu XTEC. Sense contrasenyes noves ni comptes externs.', 'Cada docente accede con la cuenta corporativa de Google del centro o su correo educativo. Sin contraseñas nuevas ni cuentas externas.', 'Cada docent hi accedeix amb el seu compte corporatiu de Google del centre o el seu correu educatiu. Sense contrasenyes noves ni comptes externs.'],
    ['🏫 Aïllament per centre', '🏫 Aislamiento por centro', '🏫 Aïllament per centre'],
    ["Les dades de cada escola estan completament separades. Cap centre pot accedir a la informació d'un altre.", 'Los datos de cada centro están completamente separados. Ningún centro puede acceder a la información de otro.', "Les dades de cada escola estan completament separades. Cap centre pot accedir a la informació d'un altre."],
    ['📄 Dades mínimes', '📄 Datos mínimos', '📄 Dades mínimes'],
    ['Només es recullen les dades estrictament necessàries: nom, horari i correu electrònic dels docents.', 'Solo se recogen los datos estrictamente necesarios: nombre, horario y correo electrónico de los docentes.', 'Només es recullen les dades estrictament necessàries: nom, horari i correu electrònic dels docents.'],
    ["🗑️ Dret a l'oblit", '🗑️ Derecho al olvido', "🗑️ Dret a l'oblit"],
    ["Qualsevol centre pot sol·licitar l'eliminació completa de les seves dades en qualsevol moment.", 'Cualquier centro puede solicitar la eliminación completa de sus datos en cualquier momento.', "Qualsevol centre pot sol·licitar l'eliminació completa de les seues dades en qualsevol moment."],
    ['🔐 Connexions xifrades', '🔐 Conexiones cifradas', '🔐 Connexions xifrades'],
    ['Totes les comunicacions van per HTTPS. Les dades en repòs estan xifrades a la base de dades.', 'Todas las comunicaciones van por HTTPS. Los datos en reposo están cifrados en la base de datos.', 'Totes les comunicacions van per HTTPS. Les dades en repòs estan xifrades a la base de dades.'],

    // ── Contacte ──
    ['Porta HorariaPro al teu centre', 'Lleva HorariaPro a tu centro', 'Porta HorariaPro al teu centre'],
    ["Escriu-me i t'explico com adaptar l'app al teu centre. La implantació és gratuïta i el suport és directe.", 'Escríbeme y te explico cómo adaptar la app a tu centro. La implantación es gratuita y el soporte es directo.', "Escriu-me i t'explique com adaptar l'app al teu centre. La implantació és gratuïta i el suport és directe."],
    ['Nom i cognoms', 'Nombre y apellidos', 'Nom i cognoms'],
    ['Correu electrònic', 'Correo electrónico', 'Correu electrònic'],
    ['Nom del centre', 'Nombre del centro', 'Nom del centre'],
    ['Rol al centre (opcional)', 'Rol en el centro (opcional)', 'Rol al centre (opcional)'],
    ['Selecciona el teu rol', 'Selecciona tu rol', 'Selecciona el teu rol'],
    ['Director/a', 'Director/a', 'Director/a'],
    ["Cap d'estudis", 'Jefe/a de estudios', "Cap d'estudis"],
    ['Secretari/a', 'Secretario/a', 'Secretari/a'],
    ['Altre', 'Otro', 'Altre'],
    ['Missatge (opcional)', 'Mensaje (opcional)', 'Missatge (opcional)'],
    ['Tenim 30 docents i busquem una solució per gestionar les cobertures...', 'Tenemos 30 docentes y buscamos una solución para gestionar las sustituciones...', 'Tenim 30 docents i busquem una solució per a gestionar les cobertures...'],
    ['Enviar sol·licitud →', 'Enviar solicitud →', 'Enviar sol·licitud →'],
    ['✓ Sol·licitud enviada!', '✓ ¡Solicitud enviada!', '✓ Sol·licitud enviada!'],
    ["Les teves dades s'utilitzen únicament per respondre la teva consulta. Mai es comparteixen amb tercers.", 'Tus datos se utilizan únicamente para responder a tu consulta. Nunca se comparten con terceros.', "Les teues dades s'utilitzen únicament per a respondre a la teua consulta. Mai es comparteixen amb tercers."],
    ['Contacta per WhatsApp', 'Contacta por WhatsApp', 'Contacta per WhatsApp'],
    ['Segueix-nos a Instagram', 'Síguenos en Instagram', 'Segueix-nos a Instagram'],

    // ── Peu ──
    ['Guia: gestió de cobertures', 'Guía: gestión de sustituciones', 'Guia: gestió de cobertures'],
    ['Avís legal', 'Aviso legal', 'Avís legal'],
    ['Política de privacitat', 'Política de privacidad', 'Política de privacitat'],
    ['Política de galetes', 'Política de cookies', 'Política de galetes'],
    ['Desenvolupat per Jorge Villalba ·', 'Desarrollado por Jorge Villalba ·', 'Desenvolupat per Jorge Villalba ·'],
    ['© 2026 HorariaPro. Tots els drets reservats.', '© 2026 HorariaPro. Todos los derechos reservados.', '© 2026 HorariaPro. Tots els drets reservats.'],
    ['Simulador HorariaPro', 'Simulador HorariaPro', 'Simulador HorariaPro'],
    ['✕ Tancar', '✕ Cerrar', '✕ Tancar'],
    ['Tancar', 'Cerrar', 'Tancar'],
    ['Anterior', 'Anterior', 'Anterior'],
    ['Següent', 'Siguiente', 'Següent'],
    ["Simulador d'HorariaPro", 'Simulador de HorariaPro', "Simulador d'HorariaPro"],
    ['Utilitzem galetes pròpies i de tercers (com les de Calendly, per a la reserva de demos) per millorar la teva experiència.', 'Utilizamos cookies propias y de terceros (como las de Calendly, para la reserva de demos) para mejorar tu experiencia.', 'Utilitzem galetes pròpies i de tercers (com les de Calendly, per a la reserva de demos) per a millorar la teua experiència.'],
    ['Més informació', 'Más información', 'Més informació'],
    ['Rebutjar', 'Rechazar', 'Rebutjar'],
    ["D'acord", 'De acuerdo', "D'acord"],
    ['Comença amb HorariaPro', 'Empieza con HorariaPro', 'Comença amb HorariaPro'],
    ['Tria com vols fer-ho', 'Elige cómo quieres hacerlo', 'Tria com vols fer-ho'],
    ['Integra HorariaPro ara mateix', 'Integra HorariaPro ahora mismo', 'Integra HorariaPro ara mateix'],
    ['Alta immediata, sense esperar — configures el teu centre en uns minuts, amb prova gratuïta', 'Alta inmediata, sin esperar — configuras tu centro en unos minutos, con prueba gratuita', 'Alta immediata, sense esperar — configures el teu centre en uns minuts, amb prova gratuïta'],
    ['o', 'o', 'o'],
    ['Reserva una demo en directe', 'Reserva una demo en directo', 'Reserva una demo en directe'],
    ["Videotrucada de 30 min · Et mostro l'app en acció i responc tots els dubtes", 'Videollamada de 30 min · Te enseño la app en acción y respondo todas tus dudas', "Videotrucada de 30 min · Et mostre l'app en acció i responc tots els dubtes"],
    ["Envia'm un missatge", 'Envíame un mensaje', "Envia'm un missatge"],
    ['Omple el formulari i et contacto en menys de 24 h', 'Rellena el formulario y te contacto en menos de 24 h', 'Omple el formulari i et contacte en menys de 24 h'],

    // ── Mòdul de resum / accessibilitat dinàmica ──
    ['Ampliar:', 'Ampliar:', 'Ampliar:'],
    ['contingut multimèdia', 'contenido multimedia', 'contingut multimèdia'],
    ['Reprodueix', 'Reproducir', 'Reprodueix'],
    ['Reproduir el vídeo', 'Reproducir el vídeo', 'Reproduir el vídeo'],
    ['Sortir de la pantalla completa', 'Salir de la pantalla completa', 'Eixir de la pantalla completa'],
    ['Silenciar', 'Silenciar', 'Silenciar']
  ];

  var LANGS = ['ca', 'va', 'es'];
  var HTML_LANG = { ca: 'ca', va: 'ca-ES-valencia', es: 'es' };
  var OG_LOCALE = { ca: 'ca_ES', va: 'ca_ES', es: 'es_ES' };
  var IDX = { ca: 0, es: 1, va: 2 };

  function norm(s) {
    return String(s).replace(/[  ]/g, ' ').replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
  }

  // Taula de cerca: clau normalitzada → [ca, es, va]
  var MAP = {};
  T.forEach(function (row) { MAP[norm(row[0])] = row; });

  var current = 'ca';

  function translateString(ca, lang) {
    var row = MAP[norm(ca)];
    if (!row || lang === 'ca') return null;
    var out = row[IDX[lang]];
    // Manté l'espai dur davant del símbol de percentatge i de l'abreviatura "u."
    return out.replace(/ %/g, ' %').replace(/ u\.\)/g, ' u.)');
  }

  // API pública per al JS de la pàgina (calculadora de preus, formulari...).
  // t('text en català') → text a l'idioma actual (o el mateix si no hi ha traducció).
  function t(ca) {
    var r = translateString(ca, current);
    return r === null ? ca : r;
  }

  var ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

  function applyText(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        return /\S/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      if (node.__ca === undefined) node.__ca = node.nodeValue;
      var src = node.__ca;
      var tr = translateString(src, current);
      if (tr === null) {
        if (node.nodeValue !== src) node.nodeValue = src;
        continue;
      }
      var lead = (src.match(/^\s*/) || [''])[0];
      var trail = (src.match(/\s*$/) || [''])[0];
      node.nodeValue = lead + tr + trail;
    }
  }

  function applyAttrs(root) {
    var sel = ATTRS.map(function (a) { return '[' + a + ']'; }).join(',');
    var els = root.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.__caAttrs) el.__caAttrs = {};
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        if (el.__caAttrs[a] === undefined) el.__caAttrs[a] = el.getAttribute(a);
        var src = el.__caAttrs[a];
        var tr = translateString(src, current);
        el.setAttribute(a, tr === null ? src : tr);
      });
    }
  }

  var META_SEL = 'meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"],meta[name="twitter:title"],meta[name="twitter:description"]';
  function applyMeta() {
    var metas = document.querySelectorAll(META_SEL);
    for (var i = 0; i < metas.length; i++) {
      var m = metas[i];
      if (m.__ca === undefined) m.__ca = m.getAttribute('content');
      var tr = translateString(m.__ca, current);
      m.setAttribute('content', tr === null ? m.__ca : tr);
    }
    if (document.__caTitle === undefined) document.__caTitle = document.title;
    var tt = translateString(document.__caTitle, current);
    document.title = tt === null ? document.__caTitle : tt;
    var loc = document.querySelector('meta[property="og:locale"]');
    if (loc) loc.setAttribute('content', OG_LOCALE[current]);
  }

  function detect() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (q) { q = q.toLowerCase(); if (q === 'val' || q === 'ca-valencia') q = 'va'; if (LANGS.indexOf(q) > -1) return { lang: q, explicit: true }; }
    try {
      var saved = localStorage.getItem('hp_lang');
      if (saved && LANGS.indexOf(saved) > -1) return { lang: saved, explicit: true };
    } catch (e) {}
    var prefs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || '']);
    for (var i = 0; i < prefs.length; i++) {
      var l = String(prefs[i]).toLowerCase();
      if (/^ca(-|_).*valencia/.test(l) || l === 'val' || /^ca-es-valencia/.test(l)) return { lang: 'va' };
      if (l.indexOf('ca') === 0) return { lang: 'ca' };
      if (l.indexOf('es') === 0) return { lang: 'es' };
      if (l.indexOf('en') === 0 || l.indexOf('fr') === 0) break; // idiomes sense versió: català per defecte
    }
    return { lang: 'ca' };
  }

  function syncSelectors() {
    var sels = document.querySelectorAll('.lang-select');
    for (var i = 0; i < sels.length; i++) sels[i].value = current;
  }

  function setLang(lang, persist) {
    if (LANGS.indexOf(lang) === -1) lang = 'ca';
    current = lang;
    document.documentElement.setAttribute('lang', HTML_LANG[lang]);
    applyText(document.body);
    applyAttrs(document);
    applyMeta();
    syncSelectors();
    if (persist) { try { localStorage.setItem('hp_lang', lang); } catch (e) {} }
    // La calculadora de preus escriu textos dinàmics: es refresquen en l'idioma nou
    try {
      var slider = document.getElementById('calcSlider');
      if (slider && typeof window.updateCalculadora === 'function') window.updateCalculadora(slider.value);
    } catch (e) {}
    try { document.dispatchEvent(new CustomEvent('hp:langchange', { detail: { lang: lang } })); } catch (e) {}
  }

  window.HPI18N = { t: t, setLang: function (l) { setLang(l, true); }, get lang() { return current; } };

  function init() {
    var d = detect();
    var sels = document.querySelectorAll('.lang-select');
    for (var i = 0; i < sels.length; i++) {
      sels[i].addEventListener('change', function (e) { setLang(e.target.value, true); });
    }
    if (d.lang !== 'ca' || d.explicit) setLang(d.lang, false);
    else syncSelectors();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
