var app = angular.module('hex', [])
  .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.saturday = [
      {
        time: '12:00',
        people: [
          {
            link: 'http://www.achang.work/streetlife/',
            image: './img/schedule/andrew.jpg',
            name: 'Andrew Chang',
            workshop: 'Astrophotography',
            level: 'Intermediate',
            software: 'Photoshop, Lightroom',
            about: 'Andrew will be teaching a workshop on the basics of astrophotography and how to shoot stars in light-polluted areas (like Berkeley!) Learn to create awesome images of the bright lights above us and the Milky Way!'
          },
          {
            link: 'https://drive.google.com/file/d/0B_XnYwztZUGNNlBWeVRCYTRIcTQ/view?usp=sharing',
            image: './img/schedule/khor.jpg',
            name: 'Le Yi Khor',
            workshop: 'Intro to Illustrator',
            level: 'Beginner',
            software: 'Illustrator',
            about: 'You don\'t have to be a pro at illustrator to do really cool designs. Learn how you can make designs with just a few basic illustrator tools!'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: 'www.jceyang.com',
            image: './img/schedule/peterjon.jpg',
            name: 'Peter Phan & Jonathan Yang',
            workshop: 'Intro to Photo',
            level: 'Beginner',
            software: 'Lightroom',
            about: 'This is an introduction to Lightroom and Photo Theory. Come learn the in\'s and out\'s of Adobe LR, and how to take what\'s good and put it into your own work.'
          },
          {
            link: 'instagram.com/badboytype',
            image: './img/schedule/jasonlisa.jpeg',
            name: 'Lisa Inoue & Jason Mai',
            workshop: 'Lettering',
            level: 'Beginner',
            software: 'Photoshop, Brushes',
            about: 'Lettering is great for decorating greeting cards and designing more expressive posters. Come learn how to draw your own beautiful letters with a brush pen!'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            link: 'https://www.behance.net/royachagnon',
            image: './img/schedule/roya.jpg',
            name: 'Roya Chagnon',
            workshop: 'Low Poly Art',
            level: 'Intermediate',
            software: 'Photoshop, Illustrator',
            about: 'We\'re going to learn how to make an illustration in the low-poly style starting from a photo! An easy way to make something that looks really cool and will impress all your friends.'
          },
          {
            link: 'http://bsmarimon.github.io/',
            image: './img/schedule/ben.jpg',
            name: 'Ben Marimon',
            workshop: 'Web Design',
            level: 'Intermediate',
            software: 'Sketch/Illustrator, Text Editor',
            about: 'This workshop will be teaching basics in web design, starting page layout and component design. We\'ll go over how to translate your ideas into tangible code that can run in your browser :D '
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'http://david.xie.fm/',
            image: './img/schedule/davidx.jpg',
            name: 'David Xie',
            workshop: 'Spotify Aesthetic',
            level: 'Beginner',
            software: 'Photoshop',
            about: 'Have you ever noticed how all design looks the same these days? Be a part of the problem! Learn all about Spotify design aesthetics & duotone coloring with me! <3'
          },
          {
            link: 'http://www.tinaxu.com/',
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Isometric Landscapes',
            level: 'Beginner',
            software: 'Illustrator',
            about: 'Learn how to make objects, buildings, and more on an isometric grid so you can make cool landscapes like the ones in Monument Valley and Minecraft.'
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            link: 'http://www.margaretzhou.com/',
            image: './img/schedule/margie.jpg',
            name: 'Margaret Zhou',
            workshop: 'Intro to AfterEffects',
            level: 'Beginner',
            software: 'AfterEffects',
            about: 'Ever wanted to learn how to make motion graphics and how to animate your graphic work? Come learn basics to After Effects and create a short animated video about yourself!'
          },
          {
            link: 'http://www.tinaxu.com/',
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Geometric Illustrations',
            level: 'Beginner',
            software: 'Illustrator',
            about: 'Did you know that the twitter logo is made purely from 13 circles? Learn the basics of how to make everything from food to landmarks using only shapes in Illustrator!'
          }
        ]
      }
    ];

    $scope.sunday = [
      {
        time: '12:00',
        people: [
          {
            link: 'http://www.catherinezhou.me/',
            image: './img/schedule/cassie.jpg',
            name: 'Cassie Zhou',
            workshop: 'Illustrating Chibis',
            level: 'Beginner',
            software: 'Illustrator',
            about: 'Join me in my journey to the 2D world! Learn to make a chibi head!'
          },
          {
            link: 'http://www.dtbui.com/',
            image: './img/schedule/davidb.jpg',
            name: 'David Bui',
            workshop: 'Portfolio Building and Hiring Practices',
            level: 'Beginner',
            software: 'Sketch',
            about: 'Learn about building a comprehensive portfolio for UI/UX, and industry hiring tips and practices.'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: 'http://george-geng.github.io/',
            image: './img/schedule/george.jpg',
            name: 'George & Kat',
            workshop: 'Digital Illustration',
            level: 'Intermediate',
            software: 'Tablet, Photoshop/any drawing program',
            about: 'Love Disney concept art, graphic novels, or other types of digital art? Learn the basics of digital painting and illustration, using line art, value and other fun techniques in Photoshop!'
          },
          {
            link: 'http://charissecelestial.com',
            image: './img/schedule/charisse.jpg',
            name: 'Charisse Celestial',
            workshop: 'Sketch to Vector',
            level: 'Beginner',
            software: 'Photoshop/Illustrator',
            about: 'This workshop will help you simplify the creative process by teaching you how to transfer your work from sketchbook to screen with ease. *Familiarity with the pen tool is preferred but not required.'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            link: 'https://www.instagram.com/lettersnap/',
            image: './img/schedule/barbara.jpg',
            name: 'Barbara Yang',
            workshop: 'Hand Lettering with Basic Tools',
            level: 'Beginner',
            software: 'Pen, pencil and paper',
            about: 'Learn the basics of hand lettering with pencil (no brush pens necessary!). Be prepared to whip out your elementary school cursive skills.'
          },
          {
            link: 'http://ankurmaniar.com',
            image: './img/schedule/ankur.jpg',
            name: 'Ankur Maniar',
            workshop: 'Fashion Photography',
            level: 'Beginner',
            software: 'Photoshop',
            about: 'Come learn the ins and outs of fashion photography, specifically photo editing for fashion and beauty shots.'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'http://www.gracesnoh.com',
            image: './img/schedule/grace.jpg',
            name: 'Grace Noh',
            workshop: 'UI/UX Principles',
            level: 'Advanced',
            software: 'Sketch',
            about: 'The first half of the workshop will cover some important UI/UX principles to keep in mind when designing interfaces for web and mobile applications. The latter half of the workshop will be an introduction to Sketch App, a common UI/UX wire-framing tool, to put these UI/UX principles into practice.'
          },
          {
            link: 'http://instagram.com/encoreankur',
            image: './img/schedule/ankuranne.jpeg',
            name: 'Ankur & Anne',
            workshop: 'Instagram Aesthetic',
            level: 'Beginner',
            software: 'Photoshop',
            about: 'Hear the spiciest tips on how to get the most instagram followers, from taking the photo to modeling for it.'
          }
        ]
      }
    ];

    function scrollAnimate(container) {
      $('html, body').animate({
        scrollTop: $(container).offset().top
      }, 'slow');
    };

    $(document).ready(function() {

      $('#about').click(function() {
        scrollAnimate('#about-container');
      });

      $('#schedule').click(function() {
        scrollAnimate('#schedule-container')
      });

      $('#about-small').click(function() {
        scrollAnimate('#about-container');
      });

      $('#schedule-small').click(function() {
        scrollAnimate('#schedule-container')
      });

      $('.workshop-title').click(function() {
        $(this).toggleClass('open');
        $(this).next().slideToggle();
      });
    });

  }]);
