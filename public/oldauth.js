useEffect(() => {
  if (state.action === 'signin') {
    if (state.username) {
      Auth.signIn(state.username, state.password)
        .then(async () => {
          // res.setHeader('location', referer);
          // res.statusCode = 302;
          // res.end();
          // setForm({ section: 'signin' });
        })
        .catch((error) => {
          setErr([{ message: error.message, errid: 'LOGIN_ERR' }]);
        });
    } else {
      setErr([
        {
          message: 'Потребителско име не може да бъде празно',
          errid: 'EMPTY_USERNAME',
        },
      ]);
    }
  }
  if (state.action === 'signup') {
    if (
      state.username &&
      state.email &&
      state.password &&
      state.passwordagain
    ) {
      Auth.signUp({
        username: state.username,
        password: state.password,
        attributes: { email: state.email },
      })
        .then(() => {
          setForm({
            referer,
            action: 'confirmsignup',
            username: state.username,
          });
        })
        .catch((error: any) => {
          setForm({
            username: state.username,
            referer,
          });
          // section: 'signup',
          setErr([{ message: error.message || error.log }]);
        });
    } else {
      const messages = [];
      if (!state.username) {
        messages.push({
          message: 'Потребителско име не може да бъде празно',
        });
      }
      if (!state.email) {
        messages.push({ message: 'E-mail не може да бъде празен' });
      }
      if (!(state.password && state.passwordagain)) {
        messages.push({ message: 'Парола не може да бъде празна' });
      }
      if (state.password !== state.passwordagain) {
        messages.push({
          message: 'Паролите не съвпадат',
          errid: 'PasswordNotMatch',
        });
      }
      setErr(messages);

      // section: 'signup'
    }
  }
  if (state.action === 'confirmsignup' && state.username && state.emailcode) {
    Auth.confirmSignUp(state.username, state.emailcode)
      .then(() => {
        // section: 'signin',
        setForm({ username: state.username, referer });
      })
      .catch(() => {
        // section: 'confirmsignup',
        setForm({
          referer,
          username: state.username,
        });
        setErr([{ message: 'Невалиден код', errid: 'INVALID_CODE' }]);
      });
  }
  if (state.action === 'forgot' && state.username) {
    if (!state.username) {
      //  section: 'forgot',
      setErr([
        {
          message: 'Потребителско име не може да бъде празно',
          errid: 'EMPTY_USERNAME',
        },
      ]);
    }

    Auth.forgotPassword(state.username)
      .then(() => {
        // section: 'forgotchange'
        setForm({ username: state.username, referer });
      })
      .catch(() => {
        //  section: 'signin',
        setErr([
          {
            message:
              'Надвишен лимит опити за промяна на парола, моля опитайте по-късно',
            errid: 'LIMIT_EXCEEDED',
          },
        ]);
      });
  }

  if (
    state.action === 'forgotchange' &&
    state.username &&
    state.emailcode &&
    state.password
  ) {
    if (!((state.password && state.passwordagain ) && state.emailcode)) {
      // 'forgotchange',
      setErr([
        {
          message: 'Полетата не може да бъдат празни',
          errid: 'EMPTY_PASSWORD',
        },
      ]);
    }
    if (state.password !== state.passwordagain) {
      //  section: 'forgotchange',
      setErr([
        {
          message: 'Паролите не съвпадат',
          errid: 'PasswordNotMatch',
        },
      ]);
    }
    Auth.forgotPasswordSubmit(state.username, state.emailcode, state.password)
      .then(() => {
        // section: 'signin',
        setForm({
          username: state.username,
          success: true,
        });
        setErr([
          {
            message: 'Успешно сменена парола',
            errid: 'PASSWORD_CHANGED',
          },
        ]);
      })
      .catch((err: any) => {
        console.log(err, 'CHANGE PASSWORD ERROR');
        setErr([{ message: err.message, errid: err.code }]);
        // 'forgotchange'
      });
  }
}, [state.action]);
