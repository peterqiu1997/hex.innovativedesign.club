var app = angular.module('hex', [])
  .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.saturday = [
      {
        time: '11:00',
        people: [
          {
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Intro to Fashion Illustration',
            level: 'Beginner',
            software: 'Pencil, Paper, Illustrator',
            blurb: "Pretty things make me happy",
            about: 'Learn the fundamentals of human anatomy and how it is modified in fashion illustration, as well as how to stylize different silhouettes, shapes, and fabric. We\'ll draw pretty dresses and explore ways you can elevate your finished designs!'
          },
          {
            image: './img/schedule/andie.jpg',
            name: 'Andie Biggs',
            workshop: 'Photo Dreamscapes: Multiple Exposures',
            level: 'Beginner',
            software: 'Photoshop, Lightroom',
            blurb: 'Striving to make awkward work',
            about: 'Learn how to make your dreams into pictures by combining multiple photos to create multi-layered exposures using Photoshop and Lightroom.',
          }
        ]
      },
      {
        time: '12:00',
        people: [
          {
            image: './img/schedule/elizabeth.jpg',
            name: 'Elizabeth Lin',
            workshop: 'Intro to Prototyping',
            level: 'Beginner',
            software: '',
            blurb: 'Instagram: @yungvapeking',
            about: ''
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            image: './img/schedule/hongye.jpg',
            name: 'Hongye Xu',
            workshop: 'Lightwriting (and Advanced Memes)',
            level: 'Intermediate',
            software: 'After Effects',
            blurb: '',
            about: ''
          },
          {
            image: './img/schedule/roya.jpg',
            name: 'Roya Chagnon',
            workshop: 'Low Poly Portraiture',
            level: 'Intermediate',
            software: 'Photoshop, Illustrator',
            blurb: '',
            about: 'Learn how to make low-poly art! We\'ll take a photo and turn it into a final low-poly product in illustrator, learning what tools to use and some strategies and shortcuts for making the process easier.'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            image: './img/schedule/jordan.jpg',
            name: 'Jordan Said',
            workshop: 'Intro to Lightroom',
            level: 'Beginner',
            software: 'Lightroom',
            blurb: '',
            about: 'Learn the ins and outs of Lightroom, photo management and batch editing techniques. This workshop will focus on the principles of editing one photo and applying that change to multiple photos. It will mostly focus on the functionalities of Lightroom, such as sliders, brushes, color adjustments, filters, and tagging.'
          },
          {
            image: './img/schedule/haidee.jpg',
            name: 'Haidee Pan',
            workshop: 'Techniques and Color in Digital Illustration',
            level: 'Intermediate',
            software: 'Photoshop, Paint Tool SAI',
            blurb: '',
            about: 'Come learn basic painting techniques, how to organize layers, and basic color usage.'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            image: './img/schedule/davidbui.jpg',
            name: 'David Bui',
            workshop: 'Intro to UI Design',
            level: 'Beginner',
            software: 'Sketch',
            blurb: '',
            about: 'Learn how to use basic functions of Sketch, for example how to draw shapes, measure distances, use shadows to style elements, and more to make cute little buttons that can be used on a webpage.'
          },
          {
            image: './img/schedule/lisa.jpg',
            name: 'Lisa Inoue',
            workshop: 'Lettering (and Self Love)',
            level: 'Beginner',
            software: 'Illustrator, Brush pen, Paintbrush',
            blurb: '',
            about: 'Learn basic HTML/CSS and how to make a responsive (mobile-compatible) grid like Instagram. This workshop is beginner friendly, but basic knowledge about HTML/CSS will enhance the experience!'
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            image: './img/schedule/stanley.jpg',
            name: 'Stanley Kwong',
            workshop: 'Introduction to Web Development',
            level: 'Beginner',
            software: 'Text Editor, Chrome',
            blurb: '',
            about: 'An introductory workshop in web development emphasizing material design. We\'ll make a GitHub repository and host a simple portfolio on GitHub pages.'
          }
        ]
      }
    ];

    $scope.sunday = [
      {
        time: '11:00',
        people: [
          {
            image: './img/schedule/barbara.jpg',
            name: 'Barbara Yang',
            workshop: 'Introduction to Hand Lettering',
            level: 'Beginner',
            software: 'Pencil, pen',
            blurb: 'Hand lettering is all hype and wonderful, but many find it difficult to do without a brush pen or watercolors. FEAR NOT, it\'s completely possible with just a pencil or pen!! Learn how to "fake" a brush pen look and how to add the cute leaves/garlands/ribbons to match.'
          },
          {
            image: './img/schedule/anne.jpg',
            name: 'Anne Lin and Tina Xu',
            workshop: 'Photo Composition and Doodling for Instagram',
            level: 'Beginner',
            software: 'Illustrator, Instagram',
            blurb: '',
            about: ''
          }
        ]
      },
      {
        time: '12:00',
        people: [
          {
            image: './img/schedule/irene.jpg',
            name: 'Pamela Hu and Irene Dea',
            workshop: 'Portrait Basics in Illustrator & Lightroom',
            level: 'Beginner',
            software: 'Illustrator, Lightroom',
            blurb: '',
            about: 'You don\'t need to be a super experienced artist/photographer to make cool things/portraits and to play around with design! We will learn some basic Illustrator and Lightroom skills through creating graphic design portraits. You\'ll edit a photo in Lightroom, export it to Illustrator, and add ornamentation to create an artsy illustrated photo.'
          },
          {
            image: './img/schedule/cassie.jpg',
            name: 'Cassie Zhou',
            workshop: 'Making Chibis in Illustrator',
            level: 'Beginner',
            software: 'Illustrator',
            blurb: '',
            about: ''
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            image: './img/schedule/george.jpg',
            name: 'George Geng',
            workshop: 'Introduction to Digital Painting',
            level: 'Beginner',
            software: 'Photoshop',
            blurb: '',
            about: 'A introductory walk through of painting in Photoshop, from layers and brushes to blending and shading. Attendees will do a hands-on portion creating a side profile avatar of themselves or anything.'
          },
          {
            image: './img/schedule/zach.jpg',
            name: 'Zach Owens',
            workshop: 'Introduction to Film Development',
            level: 'Beginner',
            software: 'Lightroom',
            blurb: '',
            about: 'A introductory walk through of painting in Photoshop, from layers and brushes to blending and shading. Attendees will do a hands-on portion creating a side profile avatar of themselves or anything.'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            image: './img/schedule/davidxie.jpg',
            name: 'David Xie',
            workshop: 'Beauty in Letters-Styling Monograms and Ampersands',
            level: 'Beginner',
            software: 'Pencil, Markers',
            blurb: '',
            about: 'Learn to letter with ~style~! You\'ll learn how to compose and create elegant and sophisticated monograms.'
          },
          {
            image: './img/schedule/julia.jpg',
            name: 'Julia Sun',
            workshop: 'Responsive Instagram Grid Layout',
            level: 'Beginner',
            software: 'Text Editor',
            blurb: 'I would really enjoy a pet poro',
            about: 'Make your own responsive (mobile-compatible) Instagram grid layout and learn basic HTML/CSS at the same time. This workshop is beginner friendly, but basic familiarity with HTML/CSS will enhance the experience!'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            image: './img/schedule/angira.jpg',
            name: 'Angira Shirahatti',
            workshop: 'Illustrating with Shapes',
            level: 'Intermediate',
            software: 'Illustrator',
            blurb: '',
            about: ''
          },
          {
            image: './img/schedule/charley.jpg',
            name: 'Charley Huang',
            workshop: 'Vaporwave in Videography',
            level: 'Intermediate',
            software: 'After Effects',
            blurb: '',
            about: ''
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Aesthetic Silhouettes',
            level: 'Beginner',
            software: 'Illustrator',
            blurb: 'Pretty things make me happy',
            about: ''
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
      $('#image-wrapper').click(function() {
        scrollAnimate('#about-container');
      });

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
