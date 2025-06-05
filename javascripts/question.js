// Base de dados em vetor das questões por categoria (25 questões para cada )

const questions = [
    {
      category: "africa",
      questions: [
        {
          question: "Qual é o maior país da África em área?",
          options: ["Egito", "Argélia", "Nigéria", "África do Sul"],
          correctAnswer: 1,
        },
        {
          question: "Qual é o rio mais longo da África?",
          options: ["Nilo", "Congo;", "Zambeze", "Niger"],
          correctAnswer: 0,
        },
        {
          question: "Qual é a capital de Angola?",
          options: ["Nairobi", "Luanda", "Maputo", "Dakar"],
          correctAnswer: 1,
        },
        {
          question: "Em que país está localizada a pirâmide de Quéops?",
          options: ["Egito", "Etiópia", "Sudão", "Marrocos"],
          correctAnswer: 0,
        },
        {
          question: "Qual destes países africanos não tem saída para o mar?",
          options: ["Nigéria", "Angola", "Somália", "Níger"],
          correctAnswer: 3,
        },
        {
          question: "Quantos países existem na África atualmente?",
          options: ["54 Países", "48 Países", "62 Países", "50 Países"],
          correctAnswer: 0,
        },
        {
          question: "Qual país africano tem a maior população?",
          options: ["Egito", "África do Sul", "Nigéria", "Etiópia"],
          correctAnswer: 2,
        },
        {
          question: "Qual é a capital da África do Sul?",
          options: ["Durban", "Cidade do Cabo", "Joanesburgo", "Pretória"],
          correctAnswer: 3,
        },
        {
          question: "Qual é a maior floresta tropical da África?",
          options: ["Floresta de Madagascar", "Floresta do Congo", "Floresta do Saara", "Floresta do Atlas"],
          correctAnswer: 1,
        },
        {
          question: "Qual dessas línguas é mais falada na África?",
          options: ["Suaíli", "Inglês", "Francês", "Árabe"],
          correctAnswer: 3,
        },
        {
          question: "Qual é a maior ilha da África?",
          options: ["Madagascar", "Ilha de Cabo Verde", "Ilha do Príncipe", "Ilha de São Tomé"],
          correctAnswer: 0,
        },
        {
          question: "Qual é a moeda oficial da África do Sul?",
          options: ["Euro", "Dólar", "Rand", "Franco CFA"],
          correctAnswer: 2,
        },
        {
          question: "Qual é a maior montanha da África?",
          options: ["Kilimanjaro", "Atlas", "Drakensberg", "Simien"],
          correctAnswer: 0,
        },
        {
          question: "Qual animal é símbolo da savana africana?",
          options: ["Elefante", "Leão", "Rinoceronte", "Girafa"],
          correctAnswer: 1,
        },
        {
          question: "Qual é o animal mais perigoso da África?",
          options: ["Hopopótamo", "Leão", "Crocodilo", "Elefante"],
          correctAnswer: 0,
        },
        {
          question: "Qual País Africano é o maior Produtor de Cacau do Mundo?",
          options: ["Gana", "Camarões", "Costa do Marfim", "Nigéria"],
          correctAnswer: 2,
        },
        {
          question: "Qual País Africano tem mais Pirâmides?",
          options: ["Sudão", "Egito", "Libia", "Nigéria"],
          correctAnswer: 0,
        },
        {
          question: "Em qual País Africano vivem os (Povos Pigmeus) de Baixa Estatura?",
          options: ["RD Congo", "Quénia", "Tanzânia", "Angola"],
          correctAnswer: 0,
        },
        {
          question: "Mansa Musa, Foi a Pessoa mais Rica da Historia, foi Imperador de qual Império?",
          options: ["Império Romano", "Império Mongol", "Império Otomano", "Império do Mali"],
          correctAnswer: 3,
        },
        {
          question: "Qual País Africano foi Governado por Muammar Kadafi?",
          options: ["Líbia", "Tunísia", "Egito", "Argélia"],
          correctAnswer: 0,
        },
        {
          question: "Em País está Localizado o Monumento da Renascença Africana?",
          options: ["África do Sul", "Senegal", "Botsuana", "Quénia"],
          correctAnswer: 1,
        },
        {
          question: "Qua dos 4 Países Abaixo não Pertence ao Continente Africano?",
          options: ["Mongólia", "Egito", "Ruanda", "Argélia"],
          correctAnswer: 0,
        },
        {
          question: "Qual é o maior Lago da África?",
          options: ["Lago Titicaca", "Lago Baikal", "Lago Vitória", "Lago Superior"],
          correctAnswer: 2,
        },
        {
          question: "Qual é o verdadeiro no de África?",
          options: ["Alkebulan", "Kemet", "Congo", "Etiópia"],
          correctAnswer: 0,
        },
        {
          question: "Qual é o Nome da Capital da Nigéria?",
          options: ["Abuja", "Lagos", "Nairobi", "Acra"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "personalidades",
      questions: [
        {
          question: "Qual líder Sul-Africano ficou famoso por lutar contra o Apartheid?",
          options: ["Thabo Mbeki", "Nelson Mandela", "Jacob Zuma", "Desmond Tutu"],
          correctAnswer: 1,
        },
        {
          question: "Quem foi Nelson Mandela?",
          options: ["Ator de cinema", "Jogador de futebol", "Líder sul-africano anti-apartheid", "Cantor famoso"],
          correctAnswer: 2,
        },
        {
          question: "Quem é Chimamanda Ngozi Adichie?",
          options: ["Política sul-africana", "Cantora brasileira", "Atriz americana", "Escritora nigeriana"],
          correctAnswer: 3,
        },
        {
          question: "Qual é a nacionalidade de Chinua Achebe?",
          options: ["Gana", "Nigéria", "Senegal", "Etiópia"],
          correctAnswer: 1,
        },
        {
          question: "Qual líder africano é conhecido como 'Pai da Nação' do Gana?",
          options: ["Kwame Nkrumah", "Julius Nyerere", "Haile Selassie", "Leopold Senghor"],
          correctAnswer: 0,
        },
        {
          question: "Quem foi a rainha africana famosa pela resistência contra os britânicos no Zulu?",
          options: ["Rainha Máxima", "Rainha Vitória", "Rainha Nzinga", "Rainha Labaya"],
          correctAnswer: 2,
        },
        {
          question: "Qual desses foi um famoso ativista dos direitos civis sul-africano?",
          options: ["Thomas Sankara", "Patrice Lumumba", "Steve Biko", "Jomo Kenyatta"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi Haile Selassie?",
          options: ["Imperador da Etiópia", "Presidente do Senegal", "Primeiro ministro do Egito", "Rei do Marrocos"],
          correctAnswer: 0,
        },
        {
          question: "Quem é considerado o pai do pan-africanismo?",
          options: ["Kwame Nkrumah", "Julius Nyerere", "Marcus Garvey", "Nelson Mandela"],
          correctAnswer: 2,
        },
        {
          question: "Qual personalidade africana foi Nobel da Paz em 1993?",
          options: ["Desmond Tutu", "Kofi Annan", "Nelson Mandela", "Thabo Mbeki"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi Kwame Nkrumah?",
          options: ["Líder sul-africano", "Presidente da Nigéria", "Primeiro presidente de Gana", "Rei do Marrocos"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi Jomo Kenyatta?",
          options: ["Líder sul-africano", "Presidente da Etiópia", "Primeiro presidente do Quênia", "Rei do Marrocos"],
          correctAnswer: 2,
        },
        {
          question: "Qual dessas personalidades foi um poeta e presidente do Senegal?",
          options: ["Leopold Senghor", "NChinua Achebe", "Wole Soyinka", "Ngũgĩ wa Thiong'o"],
          correctAnswer: 0,
        },
        {
          question: "Quem foi Desmond Tutu?",
          options: ["Presidente da Nigéria", "Músico popular africano", "Arcebispo e ativista contra o apartheid", "Escritor sul-africano"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi Thomas Sankara?",
          options: ["Primeiro ministro do Egito", "Presidente revolucionário de Burkina Faso", "Presidente da Etiópia", "Líder sul-africano"],
          correctAnswer: 1,
        },
        {
          question: "Quem foi Chinua Achebe?",
          options: ["Ativista sul-africano", "Músico ganês", "Presidente da Nigéria", "Escritor nigeriano"],
          correctAnswer: 3,
        },
        {
          question: "Quem foi Ellen Johnson Sirleaf?",
          options: ["Primeira mulher presidente da Libéria", "Primeira mulher presidente da Egito", "Primeira mulher presidente da África do Sul", "Primeira mulher presidente da Quênia"],
          correctAnswer: 0,
        },
        {
          question: "Qual desses é um famoso cantor Nigério?",
          options: ["Youssou N'Dour", "Hugh Masekela", "Bob Marley", "Fela Kuti"],
          correctAnswer: 3,
        },
        {
          question: "Quem foi Miriam Makeba?",
          options: ["Poeta queniano", "Cantora e ativista sul-africana", "Ativista da Etiópia", "Escritor nigeriano"],
          correctAnswer: 1,
        },
        {
          question: "Quem foi Patrice Lumumba?",
          options: ["Rei do Marrocos", "Presidente do Senegal", "Primeiro primeiro-ministro do Congo independente", "Líder da África do Sul"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi Haile Selassie para o movimento Rastafari?",
          options: ["Um líder religioso islâmico", "Um político americano", "Figura messiânica", "Um imperador europeu"],
          correctAnswer: 2,
        },
        {
          question: "Quem é considerado o 'Pai da Nação' da Tanzânia?",
          options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Thomas Sankara"],
          correctAnswer: 1,
        },
        {
          question: "Quem foi Funmilayo Ransome-Kuti?",
          options: ["Cantora popular", "Ativista dos direitos das mulheres na Nigéria", "Presidente da Nigéria", "Escritora queniana"],
          correctAnswer: 1,
        },
        {
          question: "Quem foi o primeiro Africano a Ganhar o prêmio Nobel da Paz?",
          options: ["Nelsom Mandela", "Kofi Annan", "Desmond Tutu", "Albert Luthuli"],
          correctAnswer: 3,
        },
        {
          question: "Em que ano 'Nelson Mandela' assumiu o cargo de presidente da África do Sul?",
          options: ["1990", "1994", "1996", "2001"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "afrocracia",
      questions: [
        {
          question: "O que significa 'Afrocracia?",
          options: ["Religião africana", "Sistema econômico europeu", "Governo dos africanos", "Um tipo de dança"],
          correctAnswer: 2,
        },
        {
          question: "O que foi o 'Apartheid'?",
          options: ["Um Movimento Polílito", "Uma celebração Africana", "Um sistema de segregação Racial", "Uma organização de Direitos Humanos"],
          correctAnswer: 2,
        },
        {
          question: "Em quais Paises da o povo 'Maasai vive'?",
          options: ["Quénia e Tanzânia", "Gana e Zimbábue", "Sudão e Egipto", "Nigeria e Chade"],
          correctAnswer: 0,
        },
        {
          question: "Quantas Linguas são Faladas no continente africano?",
          options: ["500 Línguas", "Mais de 2000 Línguas", "1500 Línguas", "1000 Línguas"],
          correctAnswer: 1,
        },
        {
          question: "Quantos durou o período de Colonização da África?",
          options: ["200 Anos", "300 Anos ", "400 Anos", "Mais de 500 Anos"],
          correctAnswer: 3,
        },
        {
          question: "Além da Libéria, qual é o outro país africanos que não foi Colonizado?",
          options: ["Etiópa", "Angola", "Gana", "Senegal"],
          correctAnswer: 0,
        },
        {
          question: "Qual é a Lingua Nativa Mais Falada ba África?",
          options: ["Francês", "Suaíli", "Árabe", "Inglês"],
          correctAnswer: 1,
        },
        {
          question: "Qual Pais Áfricano no passado era chamado de 'Costa do Ouro'?",
          options: ["Argélia", "Senegal", "Nigéria", "Gana"],
          correctAnswer: 3,
        },
        {
          question: "Em que Década muitos Países Africanos Conquistaram a independencia do domínio colonial?",
          options: ["Década de 1990", "Década de 1940", "Década de 1960", "Década de 1980"],
          correctAnswer: 2,
        },
        {
          question: "Quem foi o Primeiro Farão do Egito?",
          options: ["Cléopatra", "Tutancâmon", "Menés", "Ramsés"],
          correctAnswer: 2,
        },
        {
          question: "Em que País Estão Localizadas a grande esfinge e as pirâmides de Gizé?",
          options: ["Sudão", "Líbia", "Egito", "Etiópa"],
          correctAnswer: 2,
        },
        {
          question: "Qual pais africano no passadp era chamado de 'Niassalândia'?",
          options: ["Malawi", "Moçambique", "Namíbia", "Zâmbia"],
          correctAnswer: 0,
        },
        {
          question: "Qual é o nome do Rei Egipcio cujo Tumba foi descoberta no vale dos Reis em 1992?",
          options: ["Ramsés", "Tutancâmon", "Narmer", "Amenofis IV"],
          correctAnswer: 1,
        },
        {
          question: "Qauis são as Religiões mais predominantes no continente Africano?",
          options: ["Judaísmos e Hinduísmo", "Islamismo e Cristianismo", "Hinduísmo e Islamismo ", "Budismo e Cristianismo"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "afrocentrismo",
      questions: [
        {
          question: "Em que país se Encontra a cidade de 'Tombuctu'?",
          options: ["Egito", "Mali", "Nigéria", "Etiópa"],
          correctAnswer: 1,
        },
        {
          question: "Qual civilização antiga africana utilizava a 'escrita Hieroglí fica'?",
          options: ["Reino do Kush (Atua Sudão)", "Reino do Kongo", "Império Axumita", "Kemet (Antigo Egito)"],
          correctAnswer: 3,
        },
        {
          question: "Who played the character of Jack Dawson in the movie Titanic?",
          options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
          correctAnswer: 0,
        },
        {
          question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
          options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
          correctAnswer: 1,
        },
        {
          question: "Who is known as the 'King of Pop'?",
          options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
          correctAnswer: 0,
        },
        {
          question: "Which superhero is known for saying, 'I am Iron Man'?",
          options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
          correctAnswer: 3,
        },
        {
          question: "Which movie franchise includes a character named Luke Skywalker?",
          options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
          correctAnswer: 1,
        },
        {
          question: "Who played the character of Hermione Granger in the Harry Potter film series?",
          options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
          correctAnswer: 0,
        },
        {
          question: "Who directed the movie 'Inception'?",
          options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
          correctAnswer: 2,
        },
        {
          question: "Which artist released the album 'Lover' in 2019?",
          options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
          correctAnswer: 1,
        },
        {
          question: "What was the first video game to feature Mario?",
          options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
          correctAnswer: 2,
        },
        {
          question: "Which movie features the famous line, 'Here's looking at you, kid'?",
          options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
          correctAnswer: 0,
        },
        {
          question: "Which country won the FIFA World Cup in 2018?",
          options: ["France", "Germany", "Argentina", "Brazil"],
          correctAnswer: 0,
        },
        {
          question: "Who created the comic book character Spider-Man?",
          options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
          correctAnswer: 1,
        },
        {
          question: "In which movie did Heath Ledger portray the Joker?",
          options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
          correctAnswer: 0,
        },
        {
          question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
          options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
          correctAnswer: 2,
        },
        {
          question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
          options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
          correctAnswer: 2,
        },
        {
          question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
          options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
          correctAnswer: 2,
        },
        {
          question: "Which Disney animated film features the song 'A Whole New World'?",
          options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
          correctAnswer: 1,
        },
        {
          question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
          options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
          correctAnswer: 3,
        },
        {
          question: "Who sang the hit song 'Shape of You'?",
          options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
          correctAnswer: 3,
        },
        {
          question: "Which film won the Academy Award for Best Picture in 2020?",
          options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
          correctAnswer: 2,
        },
        {
          question: "What year did the movie 'The Matrix' release?",
          options: ["1997", "1998", "2000", "1999"],
          correctAnswer: 3,
        },
        {
          question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
          options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
          correctAnswer: 2,
        },
        {
          question: "Which singer is known as the 'Queen of Pop'?",
          options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
          correctAnswer: 3,
        },
      ],
    },
  ];
  