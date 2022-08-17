const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app= express();
const port = 4000;


app.set('port',port);

app.use(express.json())
app.use(cors());


// Connection URL
const url = 'mongodb://api_superheroes_db_1:27017';
const client = new MongoClient(url);


// Database Name
const dbName = 'superheroes';

client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);

const superheroes = db.collection('superheroes');

async function main() {

    try {
        // db.createCollection('movies');
        // db.createCollection('superheroes');

        db.collection('superheroes').deleteMany({});

        

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Steve Rogers', 
            nombre_pj: 'Capitan America',
            biografia: 'Steven Rogers nació en el Lower East Side de Manhattan, en la ciudad de Nueva York, en 1918, hijo de inmigrantes irlandeses pobres, Sarah y Joseph Rogers.Joseph murió cuando Steve era un niño, y Sarah murió de neumonía mientras Steve era un adolescente. A principios de 1940, antes de la entrada de Estados Unidos en la Segunda Guerra Mundial, Rogers es un alto y escuálido estudiante de bellas artes que se especializa en la ilustración y un escritor y artista de cómics. Perturbado por el ascenso de Adolf Hitler al poder, Rogers intenta alistarse, pero es rechazado debido a su frágil cuerpo. Su resolución atrae la atención del general del ejército de Estados Unidos, Chester Phillips y "Proyecto: Renacimiento". Rogers se usa como sujeto de prueba para el proyecto del Supersoldado, recibiendo un suero especial fabricado por el Dr. Josef Reinstein, que luego cambió retroactivamente a un nombre en clave para el científico Abraham Erskine. El suero es un éxito y transforma a Steve Rogers en un ser humano casi perfecto con fuerza, agilidad, resistencia e inteligencia máximas. El éxito del programa deja a Erskine preguntándose acerca de replicar el experimento en otros seres humanos. El proceso en sí ha sido detallado de manera inconsistente: mientras que en el material original se muestra a Rogers recibiendo inyecciones del supersuero, cuando el origen se volvió a contar en la década de 1960, la Autoridad del Código del Cómic ya había impuesto un veto sobre la descripción gráfica de la droga, ingesta y abuso, y por lo tanto el supersuero fue reconvertido en una fórmula oral. Las cuentas posteriores insinúan una combinación de tratamientos orales e intravenosos con un régimen de entrenamiento extenuante, que culmina con la exposición a Vita-Ray.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/marvel-captain-america-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Stephen Strange', 
            nombre_pj: 'Dr Strange',
            biografia: 'Stephen Strange es un médico especializado en neurocirugía, codicioso y egocéntrico, que solo se preocupa por la riqueza de su carrera, hasta que en un accidente sufrió una enfermedad nerviosa en sus manos que le obligó a retirarse. Cuando su padre murió, su hermano fue a visitarlo para recriminarle que no fue al funeral ese día. Stephen estaba con una chica, por lo que su hermano salió enfadado. Estaba nevando esa noche y hubo un accidente en el cual su hermano murió al ser atropellado. Stephen hizo que su cadáver fuera criogenizado hasta el día en que la ciencia lo pudiera revivir. Un día escuchó hablar en un puerto acerca de un tibetano con poderes, por lo que fue a verle y con el aprendió las artes místicas, ayudó a su mentor el Anciano, quien poseía el título de Hechicero Supremo de esta dimensión, a repeler todo el mal místico que quiera causar daño a esta dimensión; tuvo enfrentamientos con sus enemigos, algunos traidores como el Barón Mordo quien deseaba el título de hechicero supremo, y consiguió vencer a entidades místicas extra-dimensionales como Pesadilla, Dormammu, entre otros.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-DrStrange-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1963',
            equipamiento: 'Ojo de Agamotto, Orbe de Agamoto, Capa de Levitación, Libro de los Vishanti'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Thor Odinson', 
            nombre_pj: 'Thor',
            biografia: 'El padre de Thor, Odín, decide que su hijo necesita que le enseñe la humildad y, en consecuencia, coloca a Thor (sin recuerdos de la divinidad) en el cuerpo y los recuerdos de un estudiante de medicina humana existente, parcialmente discapacitado, Donald Blake. Después de convertirse en médico y de vacaciones en Noruega, Blake presencia la llegada de una partida de exploración alienígena. Blake huye de los extraterrestres a una cueva. Después de descubrir el martillo de Thor, Mjolnir (disfrazado como un bastón) y golpearlo contra una roca, se transforma en el dios del trueno. ​Más tarde, se revela que Blake siempre ha sido Thor, el hechizo de Odin lo ha llevado a olvidar su historia como El Dios del Trueno y creerse mortal',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/marvel-thor-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1962',
            equipamiento: 'Mjolnir'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Vision', 
            nombre_pj: 'Vision',
            biografia: 'El robot Ultron es el creador de Visión, un tipo de androide que él llama "sintezoide", para usarlo contra el propio creador de Ultron, el Dr. Hank Pym (Ant-Man / Giant Man / Goliath / Yellowjacket) y la esposa de Pym, Janet van Dyne (la Avispa) del equipo de superhéroe Los Vengadores. Ultron envía a su nuevo sirviente para llevar a los Vengadores hacia una trampa. Avispa es la primera en encontrar al sintezoide, y lo describe como "una visión", mientras trata de escapar. Adoptando el nombre, los Vengadores convencen a Visión para que se vuelva contra Ultron. Después de enterarse de cómo Ultron lo creó, utilizando los patrones del cerebro del fallecido Simon Williams (Hombre Maravilla), Visión se convierte en un miembro del equipo. El equipo inicialmente cree que el cuerpo de Visión fue creado a partir de la Antorcha Humana Original. A los Vengadores se les dice más tarde que el señor del tiempo Immortus usó el poder del "Forever Crystal" para dividir a la Antorcha Humana original en dos entidades: Un cuerpo permaneció como la Antorcha original, mientras que Ultron reconstruyó al otro como Visión. Esto era parte de su plan de alimentar una relación para la Bruja Escarlata que le impediría tener hijos, ya que su nivel de poder significaba que cualquier descendencia que pudiera tener podría amenazar a los seres cósmicos del Universo Marvel.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/marvel-vision-1024x819.png', 'https://i.kinja-img.com/gawker-media/image/upload/g3g498kotpfptvkgl28k.jpg'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1968',
            equipamiento: 'Ninguno'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Peter Parker', 
            nombre_pj: 'Spiderman',
            biografia: 'Peter Benjamin Parker es un joven huérfano nativo de Forest Hills, Queens, en Nueva York, que vive con sus tíos May y Ben. Durante su etapa como estudiante de la ficticia Midtown High School, es mordido por una araña radiactiva en una exhibición científica y «adquiere la agilidad y la fuerza proporcional de un arácnido» Además de incrementar sus habilidades atléticas, a partir de ese momento Parker es capaz de adherirse a superficies. Gracias a sus conocimientos científicos, desarrolla un dispositivo que le permite disparar telarañas a través de pequeños cilindros montados en sus muñecas. Inicialmente usa sus poderes para volverse popular entre el público televisivo, lo cual le lleva a diseñar su propio disfraz y participar en una competición de lucha libre, sin embargo un día «ignora alegremente la posibilidad de detener a un ladrón que huye, [y] su indiferencia irónicamente lo alcanza cuando el mismo delincuente más tarde asalta y mata a su tío Ben». Tras detener al asesino, Parker aprende la lección de que «un gran poder conlleva una gran responsabilidad».',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1962',
            equipamiento: 'Mecanismos artificiales en las muñecas'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'James Rhodes', 
            nombre_pj: 'Maquina de Guerra',
            biografia: 'James «Rhodey» Rhodes, de la sección del sur de Filadelfia en Filadelfia, Pensilvania, era teniente en el Cuerpo de Marines de los Estados Unidos y se desempeñaba en misiones en el sudeste asiático. Piloto de combate, quedó varado en la jungla detrás de las líneas enemigas después de que su helicóptero fue derribado por los cohetes del Viet Cong. Se encuentra con Iron Man, que escapó del campo de prisioneros de Wong-Chu con su prototipo de armadura motorizada, por primera vez. Derrotando a los soldados del Viet Cong que les tendieron una emboscada, Rhodes y Iron Man descubrieron una base de cohetes enemiga que fue el origen del lanzamiento de cohetes que acabó con Rhodes en primer lugar. Destruyendo la base con un helicóptero del Viet Cong robado, Rhodes y Iron Man volaron el helicóptero de regreso al perímetro de defensa estadounidense. En el hospital base en Saigón, Stark llega en persona para agradecer a Rhodes por ayudar a Iron Man y ofrecerle a Rhodes un trabajo como piloto personal. Después de la Guerra de Vietnam y después de tomar varias trayectorias profesionales incluyendo el trabajo mercenario, Rhodes finalmente tomó la oferta de Stark y se convirtió en piloto personal de Stark, ingeniero jefe de aviación de Industrias Stark y uno de los amigos más cercanos de Stark.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-War-Machine-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1979',
            equipamiento: 'Traje de batalla'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Wanda Maximoff', 
            nombre_pj: 'Bruja Escarlata',
            biografia: 'Después de la trágica muerte de su hija, Anya, en un incendio provocado por una multitud antimutante, el mutante Magneto, utilizó sus poderes y exterminó a toda la multitud ante la mirada horrorizada de su esposa, Magda, la cual huyó de su marido hacia la pequeña Nación de Transia en los Montes Balcanes, estando ya embarazada de mellizos. Magda dio a luz en la Montaña Wundagore, "La ciudadela del Alto Evolucionador", a los mellizos Wanda y Pietro. Ese día, el dios antiguo caído conocido como Chton le infundió a la recién nacida Wanda un gran potencial mágico además de sus habilidades mutantes. Magda murió luego del parto. Por ese entonces también se presentaron en Wundagore Robert y Madeline Frank, viejos superhéroes conocidos como Whizzer y Miss América, quienes estaban esperando un hijo, el cual nació muerto, y Madeline murió con él. Bova, la mujer-vaca, asistente del Alto Evolucionador, ayuda a Madeline en la labor de parto. Madeline pierde la vida en el parto, de la misma manera que lo hace el hijo que esperaba. Bova decidió arreglar las cosas dándole los mellizos a Robert como si fueran sus hijos, pero al saber de la muerte de su esposa este escapó. Entonces, el Alto Evolucionador se presentó como un dios ante el gitano Django Maximoff y su esposa Marya y les entregó a los niños, que fueron entonces nombrados como Pietro y Wanda.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2020/11/Marvel-Scarlet-Witch-1-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1964',
            equipamiento: 'Ninguno'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Tony Stark',
            nombre_pj: 'Iron Man',
            biografia: 'Anthony Edward Stark es el hijo del jefe de Industrias Stark, Howard Stark y su esposa Maria Stark. Un niño genio que ingresa al MIT a la edad de 15 años para estudiar Ingeniería Industrial, luego recibe maestrías en ingeniería eléctrica y física. Después de que sus padres mueren en un accidente automovilístico, hereda la compañía de su familia. Mientras observaba los efectos de su tecnología experimental en el esfuerzo bélico estadounidense, Tony Stark es herido por una bomba y capturado por Wong-Chu, quien le ordena diseñar armas. Sin embargo, las lesiones de Stark son graves y la metralla se dirige a su corazón. Su compañero prisionero, Ho Yinsen, un físico ganador del Premio Nobel, cuyo trabajo se había ganado la admiración de Stark en el colegio, construye una placa pectoral magnética para evitar que la metralla alcance el corazón de Stark, manteniéndolo vivo. En secreto, Stark y Yinsen utilizan el taller para diseñar y construir una armadura de poder, la cual utiliza Stark para escapar. Sin embargo, durante el escape, Yinsen sacrifica su vida para salvar a Stark, distrayendo al enemigo para que Tony recargara. Stark se venga de sus secuestradores y escapa para reunirse con las fuerzas estadounidenses, conociendo en su camino a un piloto herido de la marina estadounidense, James "Rhodey" Rhodes.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1963',
            equipamiento: 'Trajes de batalla'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Bruce Banner',
            nombre_pj: 'Hulk',
            biografia: 'Durante la detonación experimental de una bomba gamma, el científico Bruce Banner salva al adolescente Rick Jones, que ha conducido al campo de pruebas; Banner empuja a Jones a una trinchera para salvarlo, pero es golpeado por la explosión, absorbiendo enormes cantidades de radiación gamma. Despierta más tarde, aparentemente ileso, pero esa noche se transforma en una forma gris y pesada. Un soldado perseguidor llama a la criatura "Hulk". Originalmente, se creía que las transformaciones de Banner en Hulk se debían a la puesta del sol y se deshacían al amanecer, pero más tarde, después de que Rick vio a Banner convertirse en Hulk durante el día, luego de un intento fallido de los hombres de Ross de lanzar a Hulk al espacio, fue descubierto para ser causado por la ira. Banner fue curado, pero optó por restaurar los poderes de Hulk con la inteligencia de Banner. La máquina de rayos gamma necesitaba afectar los efectos secundarios inducidos por la transformación que hicieron que Banner se enfermara temporalmente y volviera a su estado normal.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hulk-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1962',
            equipamiento: 'Ninguno'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Clint Barton',
            nombre_pj: 'Hawkeye',
            biografia: 'Clint Barton nació en califoria. A una edad joven perdió a sus padres en un accidente automovilístico. Después de seis años en un orfanato, Clint y su hermano Barney se escaparon para unirse al Carnaval Viajero de Maravillas Carson. Clint pronto llamó la atención del Espadachín, que tomó al niño como su asistente. Junto con la ayuda de Trick Shot, el espadachín entrenador, Clint decide convertirse en un maestro arquero. Clint encontró, más tarde, al espadachín malversando del dinero de la feria. Antes de que pudiera entregar a su mentor a las autoridades, Clint fue golpeado y tomado por muerto, permitiendo que el espadachín escapara de la ciudad. La relación de Clint con su hermano Barney y Trick Shot, pronto se deterioró. Clint adaptó sus habilidades de tiro con arco para convertirse en una atracción de carnaval estrella, un maestro arquero llamado "Ojo de Halcón", también conocida como “El tirador más grande del mundo”. Pasó algún tiempo como miembro del Circo de Ringmaster, antes de unirse al Circo de Coney Island. Fue testigo de Iron Man en acción y se inspiró para convertirse en un héroe disfrazado. Sin embargo, después de un malentendido en su primera aparición, Ojo de Halcón fue acusado de robo y catalogado de criminal. En la huida, el ingenuo Ojo de Halcón se topó con la Viuda Negra, una espía de la Unión Soviética, de la que se enamoró. Siguiendo ciegamente a la Viuda Negra, Ojo de Halcón la ayudó en su intento de robar la tecnología desarrollada por Tony Stark. En una de sus batallas con Iron Man, la Viuda Negra resultó gravemente herida. Ojo de Halcón la rescató y huyó de la batalla para salvar su vida. Pero antes de que Ojo de Halcón pudiera llevarla a un hospital, la Viuda Negra desapareció. Ojo de Halcón decidió ser un "tirador recto" a partir de entonces.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hawkeye-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1964',
            equipamiento: 'Arco y flechas'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'TChala',
            nombre_pj: 'Pantera Negra',
            biografia: 'Pantera Negra es el título ceremonial otorgado al jefe de la tribu Pantera de la avanzada nación africana de Wakanda. Además de gobernar el país, también es el jefe de sus diversas tribus (colectivamente denominadas Wakandas). El traje de Pantera es un símbolo de la oficina (jefe de estado) y se utiliza incluso durante misiones diplomáticas. En un pasado distante, un meteorito hecho de vibranium (ficticio), que absorbe la vibración, se estrelló en Wakanda y fue desenterrado. Razonando que los extranjeros explotarían a Wakanda por este valioso recurso, el gobernante, el rey TChaka, al igual que su padre y otras panteras antes que él, ocultó su país del mundo exterior. La primera esposa de TChaka, NYami, murió mientras estaba de parto con TChalla, y su segunda esposa, Ramonda, fue hecha prisionera por Anton Pretorius durante una visita a su tierra natal de Sudáfrica, por lo que durante la mayor parte de su infancia TChalla fue criado solo por su padre. TChaka fue asesinado por el aventurero Ulysses Klaw en un intento de apoderarse del montículo de vibranium. Con su gente todavía en peligro, un joven TChalla usó el arma sonora de Klaw contra Klaw y sus hombres, destrozando la mano derecha de Klaw y obligándolo a huir.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/marvel-black-panther-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1966',
            equipamiento: 'Traje y equipo de vibranium'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Thanos',
            nombre_pj: 'Thanos',
            biografia: 'Thanos nació en el planeta Titán como el hijo de los Eternos Mentor (ALars) y Sui-San, y su hermano es Eros de Titán, también conocido como Starfox. Thanos lleva el gen Deviants, y como tal, comparte la apariencia física de la raza de los primos Eternos. Al nacer, su madre se sorprendió por su apariencia e intentó matarlo, debido a que creía que su hijo aniquilaría toda la vida en el universo, pero fue detenido por Alars, el padre de Thanos. Durante sus años escolares, Thanos era un pacifista y solo jugaba con su hermano Eros y sus mascotas. En la adolescencia, Thanos se había fascinado con el nihilismo y la muerte, adorando y finalmente enamorándose de la encarnación física de la muerte, la señora Muerte. Como adulto, Thanos aumentó su fuerza física y sus poderes a través de su conocimiento científico superior. También intentó crear una nueva vida para sí mismo al engendrar muchos niños y convertirse en pirata. No encuentra ninguna satisfacción en ninguno de los dos hasta que es visitado nuevamente por Señora Muerte, por quien asesina a su descendencia y su capitán pirata.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thanos-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1973',
            equipamiento: 'Armadura'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Natasha Romanoff',
            nombre_pj: 'Viuda Negra',
            biografia: 'Natasha nació en Stalingrado (ahora Volgogrado), Rusia. La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada "Piquete de la Viuda". No usa traje durante sus primeras apariciones, sino simplemente ropa de noche y un velo. Romanova eventualmente deserta a Estados Unidos por razones que incluyen su amor por el arquero criminal convertido en superhéroe, Hawkeye.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Black-Widow-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1964',
            equipamiento: 'Armas'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Eddie Brock',
            nombre_pj: 'Venom',
            biografia: 'Venom (llamado Veneno en muchas de las traducciones al español) es un antihéroe que aparece en los cómics publicados por la editorial estadounidense Marvel Comics. El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano. Esta forma de vida dual recibe poderes mejorados y generalmente se refiere a sí misma como «Venom». El Simbionte se introdujo originalmente como un traje alienígena viviente en The Amazing Spider-Man # 252 (mayo de 1984), con una primera aparición completa como Venom en The Amazing Spider-Man # 300 (mayo de 1988).',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Venom-alt-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1984',
            equipamiento: 'Ninguno'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Ultron',
            nombre_pj: 'Ultron',
            biografia: 'Ultron fue un supervillano ficticio que aparece en los cómics publicados por Marvel Comics. El personaje fue creado por el escritor Roy Thomas y el artista John Buscema, e inicialmente hizo su debut como personaje sin nombre en The Avengers # 54 (1968), con su primera aparición completa en The Avengers # 55 (1968). Es un robot consciente de sí mismo y altamente inteligente creado por Hank Pym, quien desarrolla un complejo de dios y un resentimiento contra Pym y la raza humana. El objetivo de Ultron de destruir a la humanidad lo ha llevado a un conflicto repetido con los Vengadores.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2020/12/marvel-ultron-1-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1968',
            equipamiento: 'Ninguno'
        });
        
        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Victor von Doom',
            nombre_pj: 'Dr Doom',
            biografia: 'Victor von Doom nació décadas atrás de una tribu de gente romaní de Latveria bajo el imperio de un noble anónimo llamado el Barón. La madre de Victor era la bruja Cynthia Von Doom, quien murió a manos de Mefisto cuando Doom era joven. Su padre, Werner, era el líder de la tribu y un curandero reconocido que mantuvo en secreto la vida de hechicera de su madre con el fin de proteger a Victor de un destino similar. Poco después de la muerte de Cynthia, la esposa del Barón contrajo cáncer y Werner fue llamado a la capital para sanarla. Cuando ella sucumbió a la enfermedad, el Barón tachó a Werner como un asesino y solicitó su muerte. Werner escapó con el joven Víctor, después de haberse dado cuenta la noche anterior de que la mujer moriría. Él sigue adelante, sólo para morir congelado en la ladera de una montaña, acunando al niño en un abrazo final y dándole su ropa para mantenerlo caliente. Victor sobrevivió y, a su regreso al campamento romaní, descubrió los instrumentos ocultos de su madre y juró vengarse del Barón. Víctor creció hasta convertirse en un hombre testarudo y brillante, combinando hechicería y tecnología para crear dispositivos fantásticos para mantener acorralados a los hombres del Barón y proteger a la gente romaní. Sus hazañas atrajeron la atención del decano de la Universidad Empire State, quien envió a alguien al campamento. Presentado con la posibilidad de estudiar en los Estados Unidos, von Doom decide dejar su tierra natal y a su amor, Valeria, atrás.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Dr-Doom-1-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1962',
            equipamiento: 'Armadura'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Quentin Beck',
            nombre_pj: 'Mysterio',
            biografia: 'Mysterio es Quentin Beck, un mago y especialista en efectos especiales que trabaja para un importante estudio de Hollywood con el sueño de hacerse un nombre en la industria del cine. Sin embargo, llegó a ver su carrera en efectos especiales como un trabajo sin futuro. Sus intentos de convertirse en actor fueron mal recibidos, pero se dio cuenta de que su experiencia en ilusiones podría convertirlo en un supervillano eficaz.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Misterio-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1964',
            equipamiento: 'Escudo de vibranium'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Norman Osborn',
            nombre_pj: 'Duende Verde',
            biografia: 'El Duende Verde fue el alias de varios supervillanos de ficción que aparecen en los cómics estadounidenses publicados por Marvel Comics. La primera y más conocida encarnación, Norman Osborn, creado por Stan Lee y Steve Ditko, generalmente se considera en el archienemigo del Hombre Araña.1​Originalmente una manifestación de locura inducida químicamente, otros, como el hijo de Norman, Harry Osborn, adoptaría la personalidad. El Duende Verde es un supervillano con temática de Halloween cuyas armas se asemejan a murciélagos, fantasmas y linternas de calabaza y en la mayoría de las encarnaciones usa un hoverboard o planeador para volar.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Green-Goblin-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1964',
            equipamiento: 'Planeador y bombas'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Galactus',
            nombre_pj: 'Galactus',
            biografia: 'Galactus se llamaba originalmente Galan, un humanoide nacido en el planeta Taa, un paraíso como mundo cuya civilización habría sido la más avanzada de cualquiera de los universos conocidos. Sin embargo, su mundo estaba al borde del colapso debido a una hipotética gran implosión. Antes de esto, Galan descubrió que la plaga entrópica amenazaba a Taa; aunque en un principio dudó de su descubrimiento, pronto se demostró con la destrucción de las civilizaciones cercanas a Taa. A pesar de los esfuerzos de los mejores científicos de Taa, no pudieron encontrar una cura y las radiaciones entrópicas comenzaron a hacer estragos en su población. Galan convenció a un pequeño grupo de supervivientes para morir de forma gloriosa lanzando una nave espacial en el ardiente crisol cósmico. Sus compañeros murieron por efecto de la intensa radiación, pero Galan se vio pleno de una nueva energía, salvado por la Fuerza Fénix del agónico universo. La energía viviente habló a Galan y le introdujo indemne dentro del Huevo Cósmico. Cuando en el consiguiente Big Bang el Huevo Cósmico explotó, creó un nuevo universo. Simultáneamente, Galan y su nave espacial fueron recreados junto con las encarnaciones de Eternidad, Infinito y la Muerte. Vagó inerte durante millones de años mientras la vida comenzaba a poblar el nuevo universo. Su nave se estrelló en un planeta innominado, en donde Ecce el Vigilante vio cómo su ocupante emergía de la misma como pura energía; Ecce reconoció el peligro que traía consigo el naciente ser y podría haberle destruido, pero no hizo nada cumpliendo el juramento de no interferencia de los Vigilantes. Devolviendo la nave al espacio, el ser que una vez fue Galan arrojó los cuerpos sin vida de sus compañeros al vacío. Después creó un traje acorazado para contener y regular la terrible energía de la que estaba formado y transformó su barco en una cámara de incubación, en donde pasó incontables siglos evolucionando hacia su forma actual.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2020/05/Marvel-Galactus-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1966',
            equipamiento: 'Casco y armadura artesanal, conversor de energía, nulificador supremo'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Otto Octavius',
            nombre_pj: 'Dr Octopus',
            biografia: 'Otto Octavius nació en Schenectady, Nueva York, tuvo una educación turbulenta. Su padre, Torbert Octavius, fue un trabajador de una fábrica, era abusivo y violento hacia ambos, Otto y su madre María Octavius. La timidez del joven Otto y su buen desempeño en la escuela, hizo que lo etiquetaran como la "mascota del profesor" y lo usaron como objeto de intimidación. Torbert no apreciaba tener un hijo acosado, y ordenó a Otto usar la violencia en el trato con los bravucones. María Octavius defendería a su hijo de Torbert en muchas ocasiones, diciéndole a Otto que era un pensador dotado, y que usaría razonamientos para resolver problemas, no la violencia. Debido a la insistencia de su madre y su disgusto hacia los hombres que trabajaban en el trabajo manual, Otto estaba decidido a no ser como su padre y dedicó todos sus esfuerzos en su educación, obteniendo regularmente las mejores calificaciones. La devoción de Otto por estudiar dio sus frutos con él, al recibir una beca universitaria. Durante el primer año de Otto en la universidad, ocurrió la muerte de su padre debido a un accidente industrial, Otto se aboco hacia el estudio y una obsesión por la ciencia física. Después de graduarse de la universidad, Otto encontró trabajo en una empresa de ingeniería.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-Dr-Octopus-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1963',
            equipamiento: 'Exoesqueleto con tentáculos mecánicos'
        });

        await superheroes.insertOne({
            casa: 'Marvel',
            nombre: 'Wade Winston Wilson',
            nombre_pj: 'Deadpool',
            biografia: 'La historia de fondo del personaje ha sido presentada como vago y está sujeto a cambios, y dentro de la narración no puede recordar su historia personal debido a una condición mental. Si su nombre era o no Wade Wilson está sujeto a especulaciones ya que uno de sus enemigos, T-Ray, afirma en Deadpool # 33 que él es el verdadero Wade Wilson y que Deadpool es un asesino cruel que le robó su identidad. Ha habido otras historias dudosas sobre su historia, en un momento el supervillano Loki afirmó ser su padre. Con frecuencia, las revelaciones son reconectadas más tarde o ignoradas por completo, y en un tema, el propio Deadpool bromeó que si Wade Wilson es o no realmente depende de qué escritor prefiera el lector.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Deadpool-1-1024x819.png'],
            logo: 'https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.jpg',
            anio_aparicion: '1991',
            equipamiento: 'Traje y armas'
        });

        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Arthur Joseph Curry',
            nombre_pj: 'Aquaman',
            biografia: 'Aquaman es un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. Creado por el artista Paul Norris y el escritor Mort Weisinger, el personaje debutó en More Fun Comics # 73 (noviembre de 1941). Inicialmente, una característica de respaldo en los títulos de antología de DC, Aquaman más tarde protagonizó varios volúmenes de una serie de cómics en solitario. Durante los últimos años de la década de 1950 y 1960, el período de recuperación de superhéroes conocido como la Edad de Plata, fue miembro fundador de la Liga de la Justicia. En la Edad Moderna de la década de 1990, los escritores interpretaron el personaje de Aquaman más seriamente, con historias que representan el peso de su papel como rey de la Atlántida.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Tridente'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Selina Kyle',
            nombre_pj: 'Catwoman',
            biografia: 'Aunque originalmente fue creada como rival de Batman, el título de héroe o villano para Catwoman es más ambiguo, ya que tenía su propio código moral, que le prohibía cometer asesinato, cosa que no coincide con la mayoría de los villanos. En su primera aparición en Batman N.º 1 (primavera de 1940), era conocida como La Gata y no usaba en su atuendo nada que se pareciera a un rasgo distintivo de los felinos: su disfraz era el de una anciana que robaba joyas. Ese mismo año, en el cómic El secreto de vida de Catwoman (otoño de 1940), el personaje se define mejor y se aclara su origen. Selina Kyle, azafata de una línea de aviación, tiene un accidente cuando el avión en que viajaba se estrella en una lejana región. A causa de este, sufre de amnesia, y su único recuerdo es la veterinaria de su padre, y particularmente los gatos de ella. Obsesionada por saber su origen, se aferra a esos recuerdos, que se convierten en el centro de su existencia.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Catwoman-2-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1940',
            equipamiento: 'Látigo'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Victor Stone',
            nombre_pj: 'Cyborg',
            biografia: 'Victor Stone es el hijo de Silas Stone y Elinore Stone, científicos que lo usan como sujeto de prueba para varios proyectos de mejora de inteligencia. Si bien estos tratamientos son en última instancia exitosos y el coeficiente intelectual de Victor posteriormente crece a niveles geniales, él crece para resentir su tratamiento. Victor entabla una amistad con Ron Evers, un joven sinvergüenza que lo lleva a tener problemas con la ley. Este es el comienzo de una lucha en la que Victor lucha por la independencia, participando en actividades que sus padres desaprueban, como el atletismo y abandonar sus estudios. La asociación de Victor con delincuentes menores de edad lo lleva por un camino oscuro en el que a menudo resulta herido, pero aún vive una vida "normal" en la que puede tomar sus propias decisiones. Sin embargo, este camino rebelde no entierra la conciencia de Víctor teniendo en cuenta que se niega a participar en los grandiosos planes de Evers de terrorismo por motivos raciales. La situación de Victor cambia radicalmente cuando visita el laboratorio de sus padres, donde se realizan experimentos de acceso interdimensional. En ese momento de su entrada, una criatura gelatinosa agresiva fue arrastrada accidentalmente y la madre de Victor es asesinada por ella. Luego se volvió contra Víctor y fue gravemente herido por su ataque antes de que su padre pudiera enviarlo de regreso a su dimensión nativa. Con su esposa muerta y su hijo mutilado, inconsciente y casi muerto por el incidente, Silas se ve impulsado a aprovechar el prototipo de investigación médica protética a la que tiene acceso para tratar a Victor. Desafortunadamente, Víctor solo recupera la conciencia después de que se instalaron extremidades artificiales e implantes en su cuerpo sin su consentimiento. Víctor estaba horrorizado por el descubrimiento de los componentes metálicos, que involucran la mayor parte del lado izquierdo de su cabeza y cara, y se enfureció por haber preferido morir antes que ser víctima de las manipulaciones de su padre.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Cyborg-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1980',
            equipamiento: 'Sensores y armamento avanzado'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Boston Brand',
            nombre_pj: 'Deadman',
            biografia: 'Deadman es un antiguo acróbata de circo llamado Boston Brand, que fue asesinado durante un espectáculo de trapecio por un asaltante misterioso conocido sólo como el gancho. A su espíritu se le da el poder para poseer cualquier ser vivo, por una diosa hindú de nombre Rama Kushna, a fin de buscar a su asesino y obtener justicia. Sin embargo, Deadman se ve obligado a ayudar a los demás, mientras realizaba su búsqueda, utilizando su poder para intervenir y controlar a las personas que viven para ayudar a los inocentes. Deadman descubrió que unos delincuentes utilizan el circo ambulante para el contrabando de heroína y cocaína. En última instancia, Boston descubre la verdad sobre su asesinato y llegó a aceptar su papel como interventor en la vida de los mortales.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-deadman-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1967',
            equipamiento: 'Anillo de poder blanco'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Bruce Wayne',
            nombre_pj: 'Batman',
            biografia: 'Bruce Wayne es hijo del Dr. Thomas Wayne y su esposa Martha, dos empresarios exitosos y reconocidos en la sociedad de Gotham City. Su infancia transcurre en medio de privilegios y riquezas, predominantes durante su estancia en la mansión familiar. A los ocho años, cuando salían de una función de cine, sus padres son víctimas de un asalto en el que pierden la vida, asesinados por el delincuente Joe Chill; Bruce abrumado por un fuerte sentimiento de culpa, promete que hará todo lo posible por hacer de su ciudad un lugar más seguro, combatiendo el delito en cualquiera de sus formas. Con el afán de cumplir su sentencia, se somete a un riguroso entrenamiento físico y mental —aunque luego se percata de la necesidad de una identidad secreta, ya que según Wayne: «Los criminales son supersticiosos y cobardes, por lo que mis habilidades tienen que aprovechar sus temores para intimidarlos. Debo ser una criatura nocturna, oscura e impactante. En ese mismo relato, la intromisión repentina de un murciélago que entra a través de la ventana de su cubículo influye en su idea de convertirse en el nuevo héroe: Batman.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1939',
            equipamiento: 'Traje negro, equipamiento y armamento de alta tecnología'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Harleen Frances Quinzel',
            nombre_pj: 'Harley Queen',
            biografia: 'Harleen Quinzel, la mayor de dos hijos, nació en Bensonhurst (Brooklyn), Nueva York, de un matrimonio de cristianos judíos. Quinzel se interesó en la mente humana en una edad temprana para poder comprender todo lo que el estafador de su padre le hizo a su familia. La neoyorquina desarrolló su obsesión por el Joker durante sus años en la Universidad de Gotham donde estudió Psiquiatría. Para entrar al programa, presentó una idea que creía sería un buen eje central para su tesis de graduación: la intersección entre el amor y el crimen. Según ella, «las únicas dos circunstancias bajo las cuales una persona ignora las reglas de la sociedad [son]: cuando cometen un crimen o cuando se enamoran». Sin embargo, Quinn indujo el aparente suicidio de su novio, Guy Kopsi, a través el experimento para comprobar su teoría. Los hechos «caóticos» la llevaron a pensar que comprendía la psicología del Joker y declaró que haría lo necesario para conseguir una pasantía en el manicomio Arkham.',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Harley-Queen-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1992',
            equipamiento: 'Armas de fuego'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Clark Kent',
            nombre_pj: 'Superman',
            biografia: 'El ombre super ',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Jonn Jonzz',
            nombre_pj: 'Martian Manhunter',
            biografia: 'El ombre pito de hulk ',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Martian-Manhunter-2-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Barry Allen',
            nombre_pj: 'Flash',
            biografia: 'El ombre rapido',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-flash-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Todd Phillips',
            nombre_pj: 'Joker',
            biografia: 'El bromas',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-joker-alt-1-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Oswald Chesterfield Cobblepot',
            nombre_pj: 'Pinguino',
            biografia: 'El ombre pinhuino',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-penguin-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Diana Prince',
            nombre_pj: 'Mujer Maravilla',
            biografia: 'El ombre o no tan mujer, increible',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Wonder-Woman-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Slade Joseph Wilson',
            nombre_pj: 'Deathstroke',
            biografia: 'El ombre antiamigo de flecha',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Deathstroke-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Billy Batson',
            nombre_pj: 'Shazam',
            biografia: 'El reconocedor de musica',
            urls: ['https://yoolk.ninja/wp-content/uploads/2019/07/dc-shazam-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });
        
        await superheroes.insertOne({ 
            casa: 'DC',
            nombre: 'Orion',
            nombre_pj: 'Orion',
            biografia: 'El ombre arquero con doble vida',
            urls: ['https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Orion-1024x819.png'],
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png',
            anio_aparicion: '1941',
            equipamiento: 'Escudo de vibranium'
        });

        // const results = await db.collection('movies').find({ title: 'Back to the Future'});

        /* const query = {};
        const pj = await superheroes.findOne(query);
        console.log(pj); */


        //movies.updateOne({ _id: db.ObjectId('Loquesea')}, { $set: { title: 'Loquesea' }});
        

        //movies.deleteOne({ title: 'Back to the Future' });
    } catch (error) {
        console.log(error);
    }
};

main();


app.get('/todos', async (req, res) =>{
    try {
        const pj = await db.collection('superheroes').find().toArray();
        console.log(pj);
        res.json(pj);

    } catch (error) {
        console.log(error)
    };
});

app.get('/individual/:id', async (req, res) =>{
    const {id} = req.params;
    try {
        const pj = await db.collection('superheroes').find({ nombre_pj: id}).toArray();
        console.log(pj);
        res.json(pj);

    } catch (error) {
        console.log(error)
    };
});

app.post('/agregar', async (req, res) =>{
    const {casa, nombre, nombre_pj, biografia, urls, logo, anio_aparicion, equipamiento}=req.body;
    try{
        await db.collection('superheroes').insertOne({ 
            casa: casa,
            nombre: nombre,
            nombre_pj: nombre_pj,
            biografia: biografia,
            urls: urls,
            logo: logo,
            anio_aparicion: anio_aparicion,
            equipamiento: equipamiento
        });

    } catch (error) {
        console.log(error);
    ;}
});

app.delete('/eliminar/:name', async (req, res) =>{
    const {name}=req.params;
    try {
        await db.collection('superheroes').deleteOne({ nombre_pj: name });

    } catch (error) {
        console.log(error);
    }
});

app.put('/actualizar/:name', async (req, res) =>{
    try {
        const {casa, nombre, nombre_pj, biografia, urls, logo, anio_aparicion, equipamiento}=req.body;
        const {name}=req.params;

        await superheroes.updateOne(
            {
                nombre_pj: name
            }, 
            {
                $set: {
                    casa: casa,
                    nombre: nombre,
                    nombre_pj: nombre_pj,
                    biografia: biografia,
                    urls: urls,
                    logo: logo,
                    anio_aparicion: anio_aparicion,
                    equipamiento: equipamiento
                }
            }
        );
        console.log("Datos del body:", req.body)
        console.log(res.statusCode);
        
    } catch (error) {
        console.log(error)
    };

});


app.listen(app.get('port'), (err)=> {
    console.log(`Server running on port ${app.get('port')}`)
})