const root =
  document.documentElement;

const themeToggle =
  document.getElementById(
    'themeToggle'
  );

const navToggle =
  document.getElementById(
    'navToggle'
  );

const navLinks =
  document.getElementById(
    'navLinks'
  );

const filterButtons =
  document.querySelectorAll(
    '.filter-btn'
  );

const projectCards =
  document.querySelectorAll(
    '.project-card'
  );

const modal =
  document.getElementById(
    'projectModal'
  );

const modalClose =
  document.getElementById(
    'modalClose'
  );

const contactForm =
  document.getElementById(
    'contactForm'
  );

const backToTop =
  document.getElementById(
    'backToTop'
  );


/* =========================
   PROJECT DATA
========================= */

const projectContent = {

  orangehrm: {

    type:
      'Practice / Demo QA Project',

    title:
      'OrangeHRM Manual Testing',

    description:
      'A structured practice project created to strengthen my understanding of the complete manual testing workflow on a realistic HR management application.',

    work: [
      'Explored important modules and user flows.',
      'Prepared test scenarios and test cases.',
      'Executed tests and documented results.',
      'Practiced bug reporting and retesting.'
    ],

    outcome: [
      'Manual testing workflow understanding.',
      'Better test documentation.',
      'Improved test coverage thinking.',
      'Defect reporting practice.'
    ]

  },


  biponibd: {

    type:
      'Live / Real QA Project',

    title:
      'BiponiBD Website QA',

    description:
      'A live-project testing experience on an evolving e-commerce application where testing happens alongside active development.',

    work: [
      'Performed functional checks.',
      'Performed exploratory testing.',
      'Reviewed developing features.',
      'Reported issues with reproduction information.'
    ],

    outcome: [
      'Real-world QA exposure.',
      'Improved defect communication.',
      'Better testing prioritization.',
      'Understanding of live product testing.'
    ]

  }

};



/* =========================
   THEME TOGGLE
========================= */

function setTheme(theme) {

  root.dataset.theme = theme;

  localStorage.setItem(
    'portfolio-theme',
    theme
  );

}


const savedTheme =
  localStorage.getItem(
    'portfolio-theme'
  );


setTheme(
  savedTheme === 'light'
    ? 'light'
    : 'dark'
);


themeToggle?.addEventListener(
  'click',
  () => {

    const nextTheme =
      root.dataset.theme === 'dark'
        ? 'light'
        : 'dark';

    setTheme(nextTheme);

  }
);



/* =========================
   MOBILE NAVIGATION
========================= */

navToggle?.addEventListener(
  'click',
  () => {

    const isOpen =
      navLinks.classList.toggle(
        'open'
      );

    navToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

  }
);


document
  .querySelectorAll(
    '.nav-links a'
  )
  .forEach((link) => {

    link.addEventListener(
      'click',
      () => {

        navLinks?.classList.remove(
          'open'
        );

        navToggle?.setAttribute(
          'aria-expanded',
          'false'
        );

      }
    );

  });



/* =========================
   PROJECT FILTER
========================= */

filterButtons.forEach(
  (button) => {

    button.addEventListener(
      'click',
      () => {

        filterButtons.forEach(
          (item) => {

            item.classList.remove(
              'active'
            );

          }
        );


        button.classList.add(
          'active'
        );


        const filter =
          button.dataset.filter;


        projectCards.forEach(
          (card) => {

            const show =
              filter === 'all' ||
              card.dataset.category ===
                filter;

            card.classList.toggle(
              'hidden',
              !show
            );

          }
        );

      }
    );

  }
);



/* =========================
   PROJECT MODAL
========================= */

function openProjectModal(
  projectKey
) {

  const data =
    projectContent[
      projectKey
    ];


  if (!data || !modal) {

    return;

  }


  document.getElementById(
    'modalType'
  ).textContent =
    data.type;


  document.getElementById(
    'modalTitle'
  ).textContent =
    data.title;


  document.getElementById(
    'modalDescription'
  ).textContent =
    data.description;


  document.getElementById(
    'modalWork'
  ).innerHTML =
    data.work
      .map(
        (item) =>
          `<li>${item}</li>`
      )
      .join('');


  document.getElementById(
    'modalOutcome'
  ).innerHTML =
    data.outcome
      .map(
        (item) =>
          `<li>${item}</li>`
      )
      .join('');


  modal.showModal();

}


document
  .querySelectorAll(
    '.project-details-btn'
  )
  .forEach((button) => {

    button.addEventListener(
      'click',
      () => {

        openProjectModal(
          button.dataset.project
        );

      }
    );

  });


modalClose?.addEventListener(
  'click',
  () => {

    modal.close();

  }
);



/* =========================
   CONTACT FORM
========================= */

function validEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );

}


contactForm?.addEventListener(
  'submit',
  (event) => {

    event.preventDefault();


    const name =
      contactForm.elements
        .name.value.trim();


    const email =
      contactForm.elements
        .email.value.trim();


    const message =
      contactForm.elements
        .message.value.trim();


    const status =
      document.getElementById(
        'formSuccess'
      );


    if (
      name.length < 2 ||
      !validEmail(email) ||
      message.length < 10
    ) {

      status.textContent =
        'Please complete all fields correctly.';

      return;

    }


    status.textContent =
      'Opening your email application...';


    const subject =
      encodeURIComponent(
        `Portfolio message from ${name}`
      );


    const body =
      encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );


    window.location.href =
      `mailto:nasifparvez732@gmail.com?subject=${subject}&body=${body}`;

  }
);



/* =========================
   SCROLL REVEAL
========================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList.add(
                'visible'
              );

          }

        }
      );

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(
    '.reveal'
  )
  .forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );



/* =========================
   BACK TO TOP
========================= */

window.addEventListener(
  'scroll',
  () => {

    backToTop?.classList.toggle(
      'visible',
      window.scrollY > 600
    );

  }
);


backToTop?.addEventListener(
  'click',
  () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }
);