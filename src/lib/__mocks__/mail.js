const mockSendMail = function() {
  return new Promise((resolve, reject) => {
    resolve('done')
  })
}

const mock = jest.fn().mockImplementation(() => {
  return {sendMail: mockSendMail};
});

export const Mailer = mock;
