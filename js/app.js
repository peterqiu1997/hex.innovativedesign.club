var app = angular.module('hex', [])
  .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.saturday = [
      {
        time: '12:00',
        people: [
          {
            link: 'https://www.behance.net/anjilean',
            image: './img/schedule/anjile.jpg',
            name: 'Anjile An',
            workshop: 'Intro to Illustrator',
            level: 'Beginner',
            room: '166 Barrows',
            software: 'Illustrator',
            about: 'This workshop is for those who have absolutely zero experience with Illustrator, but students will leave with a good understanding \
            of the essential tools of Adobe Illustrator. This workshop is a great first exposure to vector graphics, and will provide the basis \
            for other workshops throughout the day!'
          },
          {
            link: 'http://www.tinaxu.com/',
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Geometric Illustrations',
            level: 'Beginner',
            room: '170 Barrows',
            software: 'Illustrator',
            about: 'Have a hang of Illustrator but itching to take your illustrative designs to the next level? Learn how to create \
            everything you can imagine out of geometric shapes.'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: '',
            image: './img/schedule/kianajessie.jpg',
            name: 'Kiana Aryan & Jessie Nguyen',
            workshop: 'Intro to Lettering',
            level: 'Beginner',
            room: '166 Barrows',
            software: 'Paper, pencil/pen',
            about: 'Looking for ways to spice up your birthday cards or add some extra flair to your wall decor? Come out to our intro to lettering \
            workshop and learn how to develop your own lettering style! No previous experience needed!'
          },
          {
            link: 'http://charissecelestial.com',
            image: './img/schedule/charisse.jpg',
            name: 'Charisse Celestial',
            workshop: 'Intro to InDesign',
            level: 'Beginner',
            room: '170 Barrows',
            software: 'Adobe InDesign',
            about: ''
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            link: 'http://www.jceyang.com',
            image: './img/schedule/jackiejon.jpg',
            name: 'Jackie Xu & Jonathan Yu',
            workshop: 'Intro to Lightroom',
            level: 'Beginner',
            room: '166 Barrows',
            software: 'Lightroom',
            about: 'Can\'t wait to edit your photos but don\'t know how? Come through to Intro to Lightroom to learn how the make the best out of your snazzy new images.'
          },
          {
            link: 'http://wdd.io/',
            image: './img/schedule/pamellen.jpg',
            name: 'Pamela Hu & Ellen Hong',
            workshop: 'Intro to Web Design',
            level: 'Beginner',
            room: '170 Barrows',
            software: 'Google Chrome, Text Editor',
            about: 'Come get jiggy with HTML, CSS, and pineapples. We’ll be teaching you how to design and code a Medium-inspired \
            blog post (about pineapples) from scratch. Come for the pineapples, leave knowing web design. No experience needed!'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'https://www.instagram.com/ndrewwang/',
            image: './img/schedule/andrew.jpg',
            name: 'Andrew Wang',
            workshop: 'Intro to Astrophotography',
            level: 'Beginner',
            room: '166 Barrows',
            software: 'Lightroom',
            about: 'Learn to take photos of the galaxy! We\'ll touch on what settings to use for your camera, where and when \
            to shoot for the best results, how to edit the photos to make the stars pop, and even why the (Astro)physics work. \
            Bring your inquisitive self for a good time, bring your laptops with Adobe Lightroom for a great time!'
          },
          {
            link: 'http://www.margaretzhou.com',
            image: './img/schedule/margie.jpg',
            name: 'Margie Zhou',
            workshop: 'Intro to Animation',
            level: 'Intermediate',
            room: '170 Barrows',
            software: 'After Effects',
            about: 'Have an illustrator design that\'s just bursting with life? Come learn to give it some life with an Introduction \
            to Animation from Illustrator to After Effects. This is for those with a decent amount of Illustrator and beginner level \
            After Effects experience. We will be animating a small scene so come prepared to use both programs.'
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            link: 'http://jackiezou.com',
            image: './img/schedule/jackie.jpg',
            name: 'Jackie Zou',
            workshop: 'Simplified Faces',
            level: 'Beginner',
            room: '170 Barrows',
            software: 'Illustrator (tablet optional)',
            about: 'Trick people into thinking you can draw faces! Join me in a spicy journey as we learn how to use illustrator to make \
            simple, sassy abstracted illustrations of your favorite celebrities/singers/dictators. Tablets/illustrator experience a plus, \
            but neither are required to have a rip roarin\' time.'
          }
        ]
      }
    ];

    $scope.sunday = [
      {
        time: '12:00',
        people: [
          {
            link: 'http://adrianababakanian.github.io/',
            image: './img/schedule/adriana.jpg',
            name: 'Adriana Babakanian',
            workshop: 'Branding & Logo Design',
            level: 'Beginner',
            room: '166 Barrows',
            software: 'Illustrator',
            about: 'Ever wanted to create a personal logo, or had an idea for a startup that you want to bring to life? Come out and \
            explore the principles of logo, branding, and marketing design to learn how to make your own brand and visual identity!'
          },
          {
            link: 'http://cargocollective.com/xbarbarayang',
            image: './img/schedule/barbara.jpg',
            name: 'Barbara Yang',
            workshop: 'Lettering & Photo',
            level: 'Intermediate',
            room: '170 Barrows',
            software: 'Photoshop',
            about: 'Ever wonder how artists overlay their lettering on a photo? We\'ll walk through this lettering project from start to finish \
            -- walk out with a printable, Instagrammable, shareable image! Lettering and Photoshop experience is useful but not required.'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: 'http://david.xie.fm',
            image: './img/schedule/davidx.jpg',
            name: 'David Xie',
            workshop: 'Retro Graphics',
            level: 'Intermediate',
            room: '166 Barrows',
            software: 'Illustrator',
            about: 'Learn how to make freaky fun retro art with David! We\'ll be using Illustrator to put together funky fun textures \
            and wacky wild shapes akin to iconic graphic artwork from when your parents were children. Best if you\'ve got a bit of \
            illustrator under your belt before coming in, but no stress if you\'re fresh fish!'
          },
          {
            link: '',
            image: './img/schedule/charley.jpg',
            name: 'Charley Huang',
            workshop: 'Video Color Correction',
            level: 'Intermediate',
            room: '170 Barrows',
            software: 'Lightroom',
            about: 'Learn how to make freaky fun retro art with David! We\'ll be using Illustrator to put together funky fun textures \
            and wacky wild shapes akin to iconic graphic artwork from when your parents were children. Best if you\'ve got a bit of \
            illustrator under your belt before coming in, but no stress if you\'re fresh fish!'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            link: 'https://andreakkchau.wixsite.com/portfolio',
            image: './img/schedule/andrea.jpg',
            name: 'Andrea Chau',
            workshop: 'Digital Painting',
            level: 'Intermediate',
            room: '166 Barrows',
            software: 'Illustrator, Photoshop, Tablet',
            about: 'Already got the gist of drawing and painting but have no idea how to paint digitally? Learn how to paint with \
            Photoshop by combining techniques of paints, pastels, airbrushing to create a beautiful, mess-free, art piece. Photoshop \
            and drawing skills recommended. Tablet experience a plus but not required.'
          },
          {
            link: 'http://juliasun.io',
            image: './img/schedule/julia.jpg',
            name: 'Julia Sun',
            workshop: 'Intro to HTML/CSS',
            level: 'Beginner',
            room: '170 Barrows',
            software: 'Google Chrome, Text Editor',
            about: 'Step into the world of web design by learning the basics of HTML/CSS while building a simple web page!  The first half\
            of the workshop will be focused on learning what HTML/CSS is and how to use it.  The second half of the workshop\
            will be me teaching you basic effects you can make with CSS.  No experience is needed,\
            just a love for learning!  Resources will be provided for continued learning after the workshop.'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'https://www.yudisun.com/',
            image: './img/schedule/yudi.jpg',
            name: 'Yudi Sun',
            workshop: 'Visual Illustration Styles',
            level: 'Advanced',
            room: '166 Barrows',
            software: 'Illustrator',
            about: 'Learn how to learn new visual illustration styles! We\'ll go over creating realistic, textured and gradient illustrations, \
            as well as how to tackle and approach all those cute n cool techniques you see on Dribbble. Illustrator experience would be fun but \
            feel free to sit in and hang out!'
          },
          {
            link: 'http://erikyangs.github.io/',
            image: './img/schedule/erik.jpg',
            name: 'Erik Yang',
            workshop: 'Motion Graphics',
            level: 'Intermediate',
            room: '170 Barrows',
            software: 'After Effects',
            about: 'Inspired by animated song lyric videos? Fade in, jiggle, and animate your text and designs to life with motion graphics \
            in Adobe After Effects. Learn how to use keyframes to smoothly transition infographics and text onto and off the screen!'
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
