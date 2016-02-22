var app = angular.module('hex', [])
  .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
    $scope.saturday = [
      {
        time: '11:00',
        people: [
          {
            link: 'http://www.tinaxu.com/',
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Intro to Fashion Illustration',
            level: 'Beginner',
            software: 'Pencil, Paper, Illustrator',
            blurb: "Pretty things make me happy",
            about: 'Learn the fundamentals of human anatomy and how it is modified in fashion illustration, as well as how to stylize different silhouettes, shapes, and fabric. We\'ll draw pretty dresses and explore ways you can elevate your finished designs!'
          },
          {
            link: 'http://andiebiggs.22slides.com/after-thoughts',
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
            link: 'http://www.elizabethylin.com/',
            image: './img/schedule/elizabeth.jpg',
            name: 'Elizabeth Lin',
            workshop: 'The Prototyping Process',
            level: 'Beginner',
            software: '',
            blurb: '',
            about: 'Come stop by Elizabeth\'s prototyping workshop this Saturday! She\'ll be going over the prototyping process: how she starts & organizes her projects and what she prioritizes when making iterations.'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: 'http://hongyexu.co/',
            image: './img/schedule/hongye.jpg',
            name: 'Hongye Xu',
            workshop: 'Lightwriting in After Effects',
            level: 'Intermediate',
            software: 'After Effects',
            blurb: '',
            about: 'Learn how to add dazzling light streaks to real action video and futureproof yourself for when profile videos come out.'
          },
          {
            link: 'https://www.behance.net/royachagnon',
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
            link: 'http://www.haideepan.com/',
            image: './img/schedule/haidee.jpg',
            name: 'Haidee Pan',
            workshop: 'Techniques and Color in Digital Illustration',
            level: 'Intermediate',
            software: 'Photoshop, Paint Tool SAI, Tablet highly recommended',
            blurb: '',
            about: 'Learn basic digital painting techniques, how to organize layers, and effective color usage.'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'http://www.dtbui.com/',
            image: './img/schedule/davidbui.jpg',
            name: 'David Bui',
            workshop: 'Intro to UI Design',
            level: 'Beginner',
            software: 'Sketch',
            blurb: '',
            about: 'Learn how to use basic functions of Sketch, for example how to draw shapes, measure distances, use shadows to style elements, and more to make cute little buttons that can be used on a webpage.'
          },
          {
            link: 'http://behance.net/lisainoue',
            image: './img/schedule/lisa.jpg',
            name: 'Lisa Inoue',
            workshop: 'Brush Basics for Lettering',
            level: 'Beginner',
            software: 'Illustrator, Brush pen, Paintbrush',
            blurb: '',
            about: 'Learn to the basics to brush lettering like a pro, and discover yourself along the way.'
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            link: 'http://stankwong.me/',
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
            link: 'http://cargocollective.com/xbarbarayang',
            image: './img/schedule/barbara.jpg',
            name: 'Barbara Yang',
            workshop: 'Introduction to Hand Lettering',
            level: 'Beginner',
            software: 'Pencil, pen',
            blurb: '',
            about: 'Hand lettering is all hype and wonderful, but many find it difficult to do without a brush pen or watercolors. FEAR NOT, it\'s completely possible with just a pencil or pen!! Learn how to "fake" a brush pen look and how to add the cute leaves/garlands/ribbons to match.'
          },
          {
            link: 'https://www.instagram.com/anne.io/',
            image: './img/schedule/anne.jpg',
            name: 'Anne Lin and Tina Xu',
            workshop: 'Photo Composition and Doodling for Instagram',
            level: 'Beginner',
            software: 'Illustrator, Instagram',
            blurb: '',
            about: 'Learn about composition in photos and in personal grids on Instagram, as well as cool tips to illustrate your favorite photos.'
          }
        ]
      },
      {
        time: '12:00',
        people: [
          {
            link: 'https://drive.google.com/open?id=0B8cbfRx4vLEdM21pN29nUkFLYlE',
            image: './img/schedule/irene.jpg',
            name: 'Pamela Hu and Irene Dea',
            workshop: 'Portrait Basics in Illustrator & Lightroom',
            level: 'Beginner',
            software: 'Illustrator, Lightroom',
            blurb: '',
            about: 'You don\'t need to be a super experienced artist/photographer to make cool things/portraits and to play around with design! We will learn some basic Illustrator and Lightroom skills through creating graphic design portraits. You\'ll edit a photo in Lightroom, export it to Illustrator, and add ornamentation to create an artsy illustrated photo.'
          },
          {
            link: 'https://www.dropbox.com/sh/3gefnmimvevr7fe/AABW09LBb7PvDvUZ_xaSD0Eoa?dl=0',
            image: './img/schedule/cassie.jpg',
            name: 'Cassie Zhou',
            workshop: 'Making Chibis in Illustrator',
            level: 'Beginner',
            software: 'Illustrator',
            blurb: '',
            about: 'Want to learn how to make cute chibis but have little to no experience with Illustrator? Have no fear, three tools are all you really need to make anything and anyone!'
          }
        ]
      },
      {
        time: '1:00',
        people: [
          {
            link: 'http://georgedoodles.tumblr.com/',
            image: './img/schedule/george.jpg',
            name: 'George Geng',
            workshop: 'Introduction to Digital Painting',
            level: 'Beginner',
            software: 'Photoshop, Tablet highly recommended',
            blurb: '',
            about: 'A introductory walk through of painting in Photoshop, from layers and brushes to blending and shading. Attendees will do a hands-on portion creating a side profile avatar of themselves or anything.'
          },
          {
            link: 'http://zachowens.wix.com/zachowensphoto',
            image: './img/schedule/zach.jpg',
            name: 'Zach Owens',
            workshop: 'Introduction to Film Development',
            level: 'Beginner',
            software: 'Lightroom',
            blurb: '',
            about: 'Learn about the in\'s and out\'s of black and white film tank development. We\'ll cover everything from the basics of the process, to pushing and pulling film, as well as the rewards associated with developing your own film. We\'ll wrap up with a simple way of scanning negatives into a flatbed scanner, and then using a photo editing software such as Lightroom to clean up images.'
          }
        ]
      },
      {
        time: '2:00',
        people: [
          {
            link: 'http://david.xie.fm/',
            image: './img/schedule/davidxie.jpg',
            name: 'David Xie',
            workshop: 'Classical Calligraphy, Modern Lettering',
            level: 'Beginner',
            software: 'Pencil, Markers',
            blurb: '',
            about: 'Learn the beauty of the ~~swash~~. Implement this classical calligraphic technique to beautify all your lettering projects and give them that high fashion flair! Make elegant, loopy monograms with me!'
          },
          {
            link: 'http://juliasun.io/',
            image: './img/schedule/julia.jpg',
            name: 'Julia Sun',
            workshop: 'Intro to HTML/CSS and Responsive Web Design',
            level: 'Beginner',
            software: 'Text Editor, Chrome',
            blurb: 'I would really enjoy a pet poro',
            about: 'Make your own responsive (mobile-compatible) Instagram grid layout and learn basic HTML/CSS at the same time. This workshop is beginner friendly, but all skill levels are welcome!'
          }
        ]
      },
      {
        time: '3:00',
        people: [
          {
            link: 'http://ashirahatti.com/',
            image: './img/schedule/angira.jpg',
            name: 'Angira Shirahatti',
            workshop: 'Illustrating with Shapes',
            level: 'Intermediate',
            software: 'Illustrator',
            blurb: '',
            about: 'An Introductory workshop in digital iilustration that will show you how to make a picture out of circles and boxes. You\'ll learn how to go from a hand sketch to an illustration, pick up tips for constructing complex shapes and how to keep your 80 million anchor points organized. We\'ll look at the Twitter logo as an example of an illustration made solely from circles, and then make our own!'
          },
          {
            link: 'https://www.facebook.com/charleyhuangs/videos/929917170416885/',
            image: './img/schedule/charley.jpg',
            name: 'Charley Huang',
            workshop: 'Vaporwave in Videography',
            level: 'Intermediate',
            software: 'After Effects',
            blurb: '',
            about: 'Learn how to make an edgy, alternative, technicolored video in After Effects.'
          }
        ]
      },
      {
        time: '4:00',
        people: [
          {
            link: 'http://www.tinaxu.com/',
            image: './img/schedule/tina.jpg',
            name: 'Tina Xu',
            workshop: 'Aesthetic Silhouettes',
            level: 'Beginner',
            software: 'Illustrator',
            blurb: 'Pretty things make me happy',
            about: 'Learn how to use clipping masks to create very simple yet compelling silhouettes.'
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
