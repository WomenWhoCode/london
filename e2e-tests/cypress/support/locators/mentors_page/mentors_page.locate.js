const ALERT = ':nth-child(3) > .alert';
const KEYWORD_INPUT = '#keywords';
const EXPERIENCE_DROPDOWN = '#experience';
const AREA_DROPDOWN = '#area';
const MENTEE_FOCUS = '#focus';
const LONG_TERM_RADIOBUTTON = '.form-inline > :nth-child(5)';
const AD_HOC_RADIOBUTTON = '.form-inline  > :nth-child(6)';

//Mentors cards (1st one in the list)
//const MENTORS_CARDS = '.mentors .card';
const MENTORS_CARDS = '.card:not(.d-none)';
const PRESENTATION_TAB = '#bt-p-51';
const SKILLS_TAB = '#bt-s-51';
const MENTEES_TAB = '#bt-m-51';
// const SHOW_MORE_BUTTON = '#btn-show-more-51';

const MENTORS_FILE = 'temporary/mentors.yml';
const MENTORS_TITLE = '.card-title';
const MENTORS_POSITION = '.card-presentation .position';
const MENTORS_LOCATION = '.card-presentation .card-text';
const MENTORS_BIO = '.card-presentation .card-text';
const SHOW_MORE_BUTTON = '.card-presentation .show-more';

class mentorsLocatorManager {
  validateMentorsAlert = () => {
    return cy
      .get(ALERT)
      .shouldBeVisible()
      .should(
        'contain',
        ' Dear mentors and mentees, we would like to inform you that we will be concluding Mentorship Programme 4.0 in November, and there will be no further ad-hoc sessions from November onwards this year. We deeply appreciate your active participation and  we look forward to seeing you again next year!'
      );
  };

  validateMentorsPageHeader = () => {
    return cy
      .get('h1')
      .shouldBeVisible()
      .should('contain', 'Meet our community of mentors!');
  };

  //Search section
  validateKeywordInput = () => {
    return cy
      .get(KEYWORD_INPUT)
      .shouldBeVisible()
      .should('have.attr', 'placeholder', 'Keywords');
  };

  verifyExperienceDropdownValues = () => {
    cy.fixture('test_data/mentor_experience.json').then((file) => {
      const options = file.experienceOptions;
      cy.get(EXPERIENCE_DROPDOWN)
        .children('option')
        .should('have.length', options.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', options[index].label);
        });
    });
  };

  verifyAreaDropdownValues = () => {
    cy.fixture('test_data/mentor_areas.json').then((mentors) => {
      const options = mentors.areaOptions;
      cy.get(AREA_DROPDOWN)
        .children('option')
        .should('have.length', options.length)
        .each(($option, index) => {
          cy.wrap($option).should('contain', options[index].label);
        });
    });
  };

  verifyMenteeFocusDropdownValues = () => {
    const referenceValues = [
      'Mentee Focus',
      'Switch career to IT',
      'Grow from beginner to mid-level',
      'Grow from mid-level to senior-level',
      'Grow beyond senior level',
      'Switch from IC to management position',
      'Change specialisation within IT',
    ];

    cy.get(MENTEE_FOCUS)
      .children('option')
      .should('have.length', referenceValues.length)
      .each(($option, index) => {
        cy.wrap($option).should('contain', referenceValues[index]);
      });
  };

  validateLongTermRadiobutton = () => {
    return cy
      .get(LONG_TERM_RADIOBUTTON)
      .find('label')
      .should('contain', 'Long Term relationship');
  };

  validateAdHocRadiobutton = () => {
    return cy.get(AD_HOC_RADIOBUTTON).find('label').should('contain', 'Ad-Hoc');
  };

  //Mentors cards
  getMentorsCards = () => {
    return cy.get(`[id*="mentor-card"]`).should('exist');
  };

  validatePresentationTab = () => {
    return cy
      .get(PRESENTATION_TAB)
      .shouldBeVisible()
      .should('contain', 'Presentation');
  };

  validateSkillsTab = () => {
    return cy.get(SKILLS_TAB).shouldBeVisible().should('contain', 'Skills');
  };

  validateMenteesTab = () => {
    return cy.get(MENTEES_TAB).shouldBeVisible().should('contain', 'Mentees');
  };

  validateShowMoreButton = () => {
    return cy
      .get(SHOW_MORE_BUTTON)
      .shouldBeVisible()
      .should('contain', 'Show more');
  };

  getMentorsCards = () => {
    return cy.get(MENTORS_CARDS).should('exist');
  };

  validateMentorByName = (option, mentorName) => {
    cy.wrap(option).find(MENTORS_TITLE).should('contain', mentorName);
  };

  validateMentorByPosition = (option, mentorPosition) => {
    cy.wrap(option)
      .find(MENTORS_POSITION)
      .should('contain', mentorPosition);
  };

  validateMentorByLocation = (option, mentorLocation) => {
    cy.wrap(option)
      .find(MENTORS_LOCATION).contains(':nth-child(2)', ': ' + mentorLocation).should('exist');
  };

  validateMentorByBio = (option, mentorBio) => {
    // const formattedBio = mentorBio.replace(/<br>/g, '');
    // const formattedBio = mentorBio.replace(/^\s*(?:<br>\s*)*[\r\n]/gm, '');


    cy.contains('Show more').click({force: true});
    // cy.wrap(option)
    //   .find(MENTORS_BIO).contains(':nth-child(2)', ': ' + formattedBio).should('exist');
   // const formattedBio = mentorBio.split(/\.\s+/);
    // const formattedBio = mentorBio.split(/[\.\s]+|<br>/);
    const extracts = mentorBio.split('<br>');
    const cleanedExtracts = extracts.map(extract => extract.replace(/<br>/g, ''));

    cleanedExtracts.forEach((sentence, index) => {
      cy.log(`Sentence ${index + 1}: ${sentence}`);
      cy.wrap(option).find(MENTORS_BIO).contains(sentence);
    });
    // cy.wrap(option).find(MENTORS_BIO).last().contains(': Senior QA engineer with over than 4 years of dedicated experience in maintaining product quality at the highest level. Proficient in establishing effective workflows in QA team and collaborating with the teams of developers, analysts and project management.');
      // cy.wrap(option).find(MENTORS_BIO).then(($mentorBio) => { 
      //   const phrases = $mentorBio.split('. ');
      //   phrases.forEach((phrase) => {
      //     cy.contains(':nth-child(2)', phrase).should('exist');
      //   });

      //  });
      // .find(MENTORS_BIO).should('exist');
  };
  
}

export default new mentorsLocatorManager();
