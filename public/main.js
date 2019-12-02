const context = {
    title: 'Welcome to Musicon',
    body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
    instruments: [
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png',
        name: 'Electronic Keyboard',
        description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
        price: '$1,999.00',
        sale: '$1,699.89'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electric-guitar.png',
        name: 'Electric Guitar',
        description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
        price: '$599.99'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
        name: 'Bass Guitar',
        description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
        price: '$624.99'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
        name: 'Drum Kit',
        description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
        price: '$649.00',
        sale: '$349.00'
      },
      {
        image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
        name: 'Violin',
        description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
        price: '$245.00'
      },
      {
        image: 'https://www.popoptiq.com/wp-content/uploads/2018/09/slide-trumpet-092918-min.jpg',
        name: 'Trumpet',
        description: 'The quintessential and best known brass instrument, the trumpet can leave beginners looking a little silly but once you get the hang of it, your future in a brass band will almost certainly not lead to fame and fortune.',
        price: '$199.00',
        sale: '$149.99'
      }
    ],
    teamIntro: 'Meet the Team',
    team: [
      {
        name: 'Jack Frost',
        job: 'Managing Director',
        about: "I founded Musicon because I had nothing better to do. I\'ve since been very surprised at its success because it reallys isn\'t very good at all. Nevertheless I'm very happy because now I can sit back and make money whilst all my staff do the hard work."
      },
      {
        name: 'Dirty Den',
        job: 'Sales Director',
        about: "My role here at Musicon is to rip people off. I\'m quite unscrupulous about it, probably because like most of the people in my kind of role, you rise to the top if you stop caring about people\'s wellbeing and just prioritise money. Money money money money."
      },
      {
        name: 'Frankie Hollywood',
        job: 'Assistant Rockstar',
        about: "I don\'t want to blow my own trumpet...but I kinda have to because it\'s my job!! Gosh, I\'m so funny, it really is a shame that people can\'t hear my jokes over the noise of my music. I play music to inspire people to buy - they think they can be as awesome as me."
      },
      {
        name: 'Nutcase Nigel',
        job: 'Accountant',
        about: "Accounting is just so wild. I\'ve brought a real flair and creativity to the job and Musicon\'s financial reports have never looked so good. Some people raise an eyebrow at the phrase 'Creative Accounting' but I can assure you it\'s a real art form...trust me!"
      }
    ]
  };
  
const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHtml = template(context);
document.getElementById('information').innerHTML = compiledHtml;