const root = document.documentElement;
const siteHeader = document.querySelector('.site-header');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card')];
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const projectDetailButtons = [...document.querySelectorAll('.project-details-btn')];
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');


const projectContent = {
  orangehrm: {
    type: 'Practice / Demo QA Project',
    title: 'OrangeHRM Manual Testing',
    description:
      'A structured practice project designed to understand the complete manual testing workflow on a realistic HR management application.',
    work: [
      'Explored important modules and user flows.',
      'Prepared focused test scenarios and test cases.',
      'Executed test cases with expected vs actual results.',
      'Practiced bug reporting, retesting, smoke testing, and regression thinking.'
    ],
    outcome: [
      'Manual testing process understanding.',
      'Test documentation discipline.',
      'Better coverage and edge-case thinking.',
      'Evidence-based QA practice for a fresher portfolio.'
    ],
    note: 'This is clearly presented as a practice/demo project, not professional employment experience.'
  },

  biponibd: {
    type: 'Live / Real QA Project',
    title: 'BiponiBD Website QA',
    description:
      'A live-project testing experience on an evolving web application where testing happens alongside active product development and practical team communication.',
    work: [
      'Performed functional and exploratory checks on available features.',
      'Observed real development-stage behavior and incomplete features.',
      'Reported issues with clear reproduction information and user impact.',
      'Adapted testing to a practical workflow without assuming a formal QA process.'
    ],
    outcome: [
      'Real-world testing exposure.',
      'Better prioritization under changing requirements.',
      'Stronger communication of defects and risks.',
      'Understanding of QA work in a live development environment.'
    ],
    note:
      'Only non-confidential information should be published here. Credentials, private admin data, customer data, and internal information must stay out of the portfolio.'
  }
};

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);

  themeIcon.textContent = theme === 'dark' ? '☼' : '☾';

  themeToggle.setAttribute(
    'aria-label',
    theme === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme'
  );
}

const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light' || savedTheme === 'dark') {
  setTheme(savedTheme);
} else {
  setTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const nextTheme =
    root.dataset.theme === 'dark'
      ? 'light'
      : 'dark';

  setTheme(nextTheme);
});

function closeMobileNav() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

  document.body.classList.toggle(
    'menu-open',
    isOpen
  );
});

navAnchors.forEach((link) => {
  link.addEventListener(
    'click',
    closeMobileNav
  );
});

window.addEventListener('scroll', () => {
  siteHeader.classList.toggle(
    'scrolled',
    window.scrollY > 12
  );
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove('active');
    });

    button.classList.add('active');

    projectCards.forEach((card) => {
      const shouldShow =
        filter === 'all' ||
        card.dataset.category === filter;

      card.classList.toggle(
        'hidden',
        !shouldShow
      );
    });
  });
});

function openProjectModal(projectKey) {
  const content =
    projectContent[projectKey];

  if (!content) return;

  document.getElementById(
    'modalType'
  ).textContent = content.type;

  document.getElementById(
    'modalTitle'
  ).textContent = content.title;

  document.getElementById(
    'modalDescription'
  ).textContent = content.description;

  document.getElementById(
    'modalNote'
  ).textContent = content.note;

  const workList =
    document.getElementById('modalWork');

  const outcomeList =
    document.getElementById('modalOutcome');

  workList.innerHTML =
    content.work
      .map((item) => `<li>${item}</li>`)
      .join('');

  outcomeList.innerHTML =
    content.outcome
      .map((item) => `<li>${item}</li>`)
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
      () =>
        openProjectModal(
          button.dataset.project
        )
    );
  }
);

modalClose.addEventListener(
  'click',
  () => projectModal.close()
);

projectModal.addEventListener(
  'click',
  (event) => {
    const modalBox =
      projectModal.getBoundingClientRect();

    const clickedOutside =
      event.clientX < modalBox.left ||
      event.clientX > modalBox.right ||
      event.clientY < modalBox.top ||
      event.clientY > modalBox.bottom;

    if (clickedOutside) {
      projectModal.close();
    }
  }
);

function setFieldError(
  field,
  message
) {
  const row =
    field.closest('.field-row');

  row.classList.add('invalid');

  row.querySelector(
    '.error-message'
  ).textContent = message;
}

function clearFieldError(field) {
  const row =
    field.closest('.field-row');

  row.classList.remove('invalid');

  row.querySelector(
    '.error-message'
  ).textContent = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

contactForm.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();

    formSuccess.textContent = '';

    const name =
      contactForm.elements.name;

    const email =
      contactForm.elements.email;

    const message =
      contactForm.elements.message;

    let isValid = true;

    [name, email, message].forEach(
      clearFieldError
    );

    if (
      name.value.trim().length < 2
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
      message.value.trim().length <
      10
    ) {
      setFieldError(
        message,
        'Please write a message of at least 10 characters.'
      );

      isValid = false;
    }

    if (isValid) {
      formSuccess.textContent =
        '✓ Form validation passed. The message is ready to be connected to a real email service later.';

      contactForm.reset();
    }
  }
);

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting
        ) {
          entry.target.classList.add(
            'visible'
          );

          observer.unobserve(
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.12
    }
  );

document
  .querySelectorAll('.reveal')
  .forEach((element) =>
    revealObserver.observe(element)
  );

const sections = [
  ...document.querySelectorAll(
    'main section[id]'
  )
];

const sectionObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          !entry.isIntersecting
        ) {
          return;
        }

        navAnchors.forEach(
          (link) => {
            const target = link
              .getAttribute('href')
              .slice(1);

            link.classList.toggle(
              'active',
              target ===
                entry.target.id
            );
          }
        );
      });
    },
    {
      rootMargin:
        '-38% 0px -52% 0px'
    }
  );

sections.forEach((section) =>
  sectionObserver.observe(section)
);