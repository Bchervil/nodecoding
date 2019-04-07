// database for questions and answers
const aboutMeData = [
  {
    question: 'Tell me a little bit about yourself?',
    answer: 'NYCDA grad. software Engineer great in the making',
    param: 'description',
  },
  {
    question: 'What excites you about technology?',
    answer: 'I love software development because i simply like watching things come alive.',
    param: 'tech',
  },
  {
    question: 'What is your preferred technology stack',
    answer: 'I love javascript, ruby on rails and react',
    param: 'techstack',
  },
  {
    question: 'What are your favorite hobbies?',
    answer: 'My favorite hobby are yoga, cooking and coding',
    param: 'hobbies',
  },
];

module.exports = {

  find(query) {
    // if no query passed in, return whole data
    if (Object.keys(query).length === 0) {
      return aboutMeData;
    }

    // iterate through whole data looking for match of query.q
    for (let i = 0; i < aboutMeData.length; i++) {
      if (aboutMeData[i].param === query.q) {
        const result = {};
        result.question = aboutMeData[i].question;
        result.answer = aboutMeData[i].answer;
        return result;
      }
    }

    // return Not Found message if no match
    return { message: 'Not Found' };
  },
};
