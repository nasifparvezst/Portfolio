const root =
  document.documentElement;

const siteHeader =
  document.querySelector(
    '.site-header'
  );

const themeToggle =
  document.getElementById(
    'themeToggle'
  );

const themeIcon =
  themeToggle?.querySelector(
    '.theme-icon'
  );

const navToggle =
  document.getElementById(
    'navToggle'
  );

const navLinks =
  document.getElementById(
    'navLinks'
  );

const navAnchors = [
  ...document.querySelectorAll(
    '.nav-links > a[href^="#"]'
  )
];

const filterButtons = [
  ...document.querySelectorAll(
    '.filter-btn'
  )
];

const projectCards = [
  ...document.querySelectorAll(
    '.project-card'
  )
];

const projectModal =
  document.getElementById(
    'projectModal'
  );

const modalClose =
  document.getElementById(
    'modalClose'
  );

const projectDetailButtons = [
  ...document.querySelectorAll(
    '.project-details-btn'
  )
];

const contactForm =
  document.getElementById(
    'contactForm'
  );

const formSuccess =
  document.getElementById(
    'formSuccess'
  );

const heroPhoto =
  document.getElementById(
    'heroPhoto'
  );

const photoFallback =
  document.getElementById(
    'photoFallback'
  );

const scrollProgress =
  document.getElementById(
    'scrollProgress'
  );

const backToTop =
  document.getElementById(
    'backToTop'
  );

const typedName =
  document.getElementById(
    'typedName'
  );

const prefersReducedMotion =
  window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


/* ==========================================
   PROFILE PHOTO FALLBACK
========================================== */

function showPhotoFallback() {

  heroPhoto?.classList.add(
    'is-hidden'
  );

  photoFallback?.classList.add(
    'is-visible'
  );

}


function showProfilePhoto() {

  heroPhoto?.classList.remove(
    'is-hidden'
  );

  photoFallback?.classList.remove(
    'is-visible'
  );

}


if (heroPhoto) {

  heroPhoto.addEventListener(
    'load',
    showProfilePhoto
  );

  heroPhoto.addEventListener(
    'error',
    showPhotoFallback
  );

  if (heroPhoto.complete) {

    heroPhoto.naturalWidth > 0
      ? showProfilePhoto()
      : showPhotoFallback();

  }

}


/* ==========================================
   REPEATING HERO NAME TYPEWRITER
========================================== */

function animateHeroName() {

  if (!typedName) {
    return;
  }

  const fullName =
    typedName.dataset.text ||
    'Nasif Parvez';

  if (prefersReducedMotion) {

    typedName.textContent =
      fullName;

    return;

  }

  const typingSpeed = 105;
  const fullNamePause = 3000;
  const restartDelay = 300;

  function startTyping() {

    typedName.textContent = '';

    let index = 0;

    function typeCharacter() {

      if (
        index <
        fullName.length
      ) {

        typedName.textContent +=
          fullName.charAt(index);

        index += 1;

        window.setTimeout(
          typeCharacter,
          typingSpeed
        );

        return;

      }

      /*
        Full name stays visible
        for 3 seconds.
      */

      window.setTimeout(
        () => {

          typedName.textContent = '';

          window.setTimeout(
            startTyping,
            restartDelay
          );

        },
        fullNamePause
      );

    }

    typeCharacter();

  }

  window.setTimeout(
    startTyping,
    350
  );

}


animateHeroName();


/* ==========================================
   PROJECT CONTENT
========================================== */

const projectContent = {

  orangehrm: {

    type:
      'Practice / Demo QA Project',

    title:
      'OrangeHRM Manual Testing',

    description:
      'A structured practice project created to strengthen my understanding of the complete manual testing workflow on a realistic HR management application.',

    work: [

      'Explored important modules, user roles, and business flows.',

      'Prepared focused test scenarios, test cases, and test data.',

      'Executed tests and documented expected versus actual results.',

      'Practiced bug reporting, retesting, smoke testing, and regression thinking.'

    ],

    outcome: [

      'Stronger understanding of end-to-end manual QA workflow.',

      'Better test documentation and coverage thinking.',

      'More confidence identifying edge cases and negative scenarios.',

      'Portfolio-ready evidence of structured QA practice.'

    ],

    note:
      'This project is presented as a practice/demo QA project and is not represented as professional employment experience.'

  },


  biponibd: {

    type:
      'Live / Real QA Project',

    title:
      'BiponiBD Website QA',

    description:
      'A live-project testing experience on an evolving e-commerce web application where testing happens alongside active development and changing features.',

    work: [

      'Performed functional and exploratory checks on available features.',

      'Reviewed incomplete and developing flows from a user-quality perspective.',

      'Reported issues using clear reproduction steps, evidence, and user impact.',

      'Adapted testing to a practical development workflow without assuming a formal dedicated QA process.'

    ],

    outcome: [

      'Real-world testing exposure beyond a demo application.',

      'Improved prioritization when features and requirements are still evolving.',

      'Stronger communication of defects, observations, and quality risks.',

      'Practical understanding of QA responsibilities in a live product environment.'

    ],

    note:
      'Only non-confidential information is intended for this portfolio. Private credentials, internal data, customer information, and restricted project details are not included.'

  }

};


/* ==========================================
   THEME
========================================== */

function setTheme(theme) {

  root.dataset.theme =
    theme;

  localStorage.setItem(
    'portfolio-theme',
    theme
  );

  if (themeIcon) {

    themeIcon.textContent =
      theme === 'dark'
        ? '☼'
        : '☾';

  }

  themeToggle?.setAttribute(
    'aria-label',
    theme === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme'
  );

}


const savedTheme =
  localStorage.getItem(
    'portfolio-theme'
  );


setTheme(
  savedTheme === 'light' ||
  savedTheme === 'dark'
    ? savedTheme
    : 'dark'
);


themeToggle?.addEventListener(
  'click',
  () => {

    const nextTheme =
      root.dataset.theme ===
      'dark'
        ? 'light'
        : 'dark';

    setTheme(
      nextTheme
    );

  }
);


/* ==========================================
   MOBILE NAVIGATION
========================================== */

function closeMobileNav() {

  navLinks?.classList.remove(
    'open'
  );

  navToggle?.classList.remove(
    'active'
  );

  navToggle?.setAttribute(
    'aria-expanded',
    'false'
  );

  document.body
    .classList.remove(
      'menu-open'
    );

}


navToggle?.addEventListener(
  'click',
  () => {

    const isOpen =
      navLinks?.classList.toggle(
        'open'
      );

    navToggle.classList.toggle(
      'active',
      Boolean(isOpen)
    );

    navToggle.setAttribute(
      'aria-expanded',
      String(
        Boolean(isOpen)
      )
    );

    document.body
      .classList.toggle(
        'menu-open',
        Boolean(isOpen)
      );

  }
);


navAnchors.forEach(
  (link) => {

    link.addEventListener(
      'click',
      closeMobileNav
    );

  }
);


/* ==========================================
   SCROLL UI
========================================== */

function updateScrollUI() {

  siteHeader?.classList.toggle(
    'scrolled',
    window.scrollY > 12
  );

  const scrollable =
    document.documentElement
      .scrollHeight -
    window.innerHeight;

  const progress =
    scrollable > 0
      ? (
          window.scrollY /
          scrollable
        ) * 100
      : 0;

  if (scrollProgress) {

    scrollProgress.style.width =
      `${Math.min(
        progress,
        100
      )}%`;

  }

  backToTop?.classList.toggle(
    'visible',
    window.scrollY > 650
  );

}


window.addEventListener(
  'scroll',
  updateScrollUI,
  {
    passive: true
  }
);


updateScrollUI();


/* ==========================================
   BACK TO TOP
========================================== */

backToTop?.addEventListener(
  'click',
  () => {

    window.scrollTo({
      top: 0,
      behavior:
        prefersReducedMotion
          ? 'auto'
          : 'smooth'
    });

  }
);


/* ==========================================
   PROJECT FILTER
========================================== */

filterButtons.forEach(
  (button) => {

    button.addEventListener(
      'click',
      () => {

        const filter =
          button.dataset.filter;

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

        projectCards.forEach(
          (card) => {

            const shouldShow =
              filter === 'all' ||
              card.dataset.category ===
                filter;

            card.classList.toggle(
              'hidden',
              !shouldShow
            );

          }
        );

      }
    );

  }
);


/* ==========================================
   PROJECT MODAL
========================================== */

function closeProjectModal() {

  if (!projectModal) {
    return;
  }

  if (
    typeof projectModal.close ===
      'function' &&
    projectModal.open
  ) {

    projectModal.close();

  } else {

    projectModal.removeAttribute(
      'open'
    );

  }

}


function openProjectModal(
  projectKey
) {

  const content =
    projectContent[
      projectKey
    ];

  if (
    !content ||
    !projectModal
  ) {

    return;

  }

  document.getElementById(
    'modalType'
  ).textContent =
    content.type;

  document.getElementById(
    'modalTitle'
  ).textContent =
    content.title;

  document.getElementById(
    'modalDescription'
  ).textContent =
    content.description;

  document.getElementById(
    'modalNote'
  ).textContent =
    content.note;

  document.getElementById(
    'modalWork'
  ).innerHTML =
    content.work
      .map(
        (item) =>
          `<li>${item}</li>`
      )
      .join('');

  document.getElementById(
    'modalOutcome'
  ).innerHTML =
    content.outcome
      .map(
        (item) =>
          `<li>${item}</li>`
      )
      .join('');

  if (
    typeof projectModal.showModal ===
    'function'
  ) {

    projectModal.showModal();

  } else {

    projectModal.setAttribute(
      'open',
      ''
    );

  }

}


projectDetailButtons.forEach(
  (button) => {

    button.addEventListener(
      'click',
      () => {

        openProjectModal(
          button.dataset.project
        );

      }
    );

  }
);


modalClose?.addEventListener(
  'click',
  closeProjectModal
);


projectModal?.addEventListener(
  'click',
  (event) => {

    const rect =
      projectModal
        .getBoundingClientRect();

    const clickedOutside =
      event.clientX <
        rect.left ||
      event.clientX >
        rect.right ||
      event.clientY <
        rect.top ||
      event.clientY >
        rect.bottom;

    if (clickedOutside) {

      closeProjectModal();

    }

  }
);


document.addEventListener(
  'keydown',
  (event) => {

    if (
      event.key ===
      'Escape'
    ) {

      closeMobileNav();

      closeProjectModal();

    }

  }
);


/* ==========================================
   CONTACT FORM
========================================== */

function setFieldError(
  field,
  message
) {

  const row =
    field.closest(
      '.field-row'
    );

  row?.classList.add(
    'invalid'
  );

  const error =
    row?.querySelector(
      '.error-message'
    );

  if (error) {

    error.textContent =
      message;

  }

}


function clearFieldError(
  field
) {

  const row =
    field.closest(
      '.field-row'
    );

  row?.classList.remove(
    'invalid'
  );

  const error =
    row?.querySelector(
      '.error-message'
    );

  if (error) {

    error.textContent = '';

  }

}


function isValidEmail(
  email
) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );

}


contactForm?.addEventListener(
  'submit',
  (event) => {

    event.preventDefault();

    if (formSuccess) {

      formSuccess.textContent = '';

    }

    const name =
      contactForm.elements.name;

    const email =
      contactForm.elements.email;

    const message =
      contactForm.elements.message;

    let isValid = true;

    [
      name,
      email,
      message
    ].forEach(
      clearFieldError
    );

    if (
      name.value
        .trim()
        .length < 2
    ) {

      setFieldError(
        name,
        'Please enter at least 2 characters.'
      );

      isValid = false;

    }

    if (
      !isValidEmail(
        email.value.trim()
      )
    ) {

      setFieldError(
        email,
        'Please enter a valid email address.'
      );

      isValid = false;

    }

    if (
      message.value
        .trim()
        .length < 10
    ) {

      setFieldError(
        message,
        'Please write a message of at least 10 characters.'
      );

      isValid = false;

    }

    if (!isValid) {
      return;
    }

    const subject =
      encodeURIComponent(
        `Portfolio message from ${name.value.trim()}`
      );

    const body =
      encodeURIComponent(
        `Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\nMessage:\n${message.value.trim()}`
      );

    if (formSuccess) {

      formSuccess.textContent =
        '✓ Message validated. Opening your email app...';

    }

    window.location.href =
      `mailto:nasifparvez732@gmail.com?subject=${subject}&body=${body}`;

  }
);


/* ==========================================
   SCROLL REVEAL
========================================== */

if (prefersReducedMotion) {

  document
    .querySelectorAll(
      '.reveal'
    )
    .forEach(
      (element) => {

        element.classList.add(
          'visible'
        );

      }
    );

} else {

  const revealObserver =
    new IntersectionObserver(
      (
        entries,
        observer
      ) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList.add(
                  'visible'
                );

              observer.unobserve(
                entry.target
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

        revealObserver.observe(
          element
        );

      }
    );

}


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = [
  ...document.querySelectorAll(
    'main section[id]'
  )
];


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            !entry.isIntersecting
          ) {

            return;

          }

          navAnchors.forEach(
            (link) => {

              const target =
                link
                  .getAttribute(
                    'href'
                  )
                  .slice(1);

              const isActive =
                target ===
                entry.target.id;

              link.classList.toggle(
                'active',
                isActive
              );

              if (isActive) {

                link.setAttribute(
                  'aria-current',
                  'page'
                );

              } else {

                link.removeAttribute(
                  'aria-current'
                );

              }

            }
          );

        }
      );

    },
    {
      rootMargin:
        '-35% 0px -55% 0px'
    }
  );


sections.forEach(
  (section) => {

    sectionObserver.observe(
      section
    );

  }
);