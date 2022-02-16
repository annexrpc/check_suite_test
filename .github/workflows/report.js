module.exports = async (args) => {
  const action = actions[args.github.event.action];
  if (action) await action(args)
};

const actions = { requested, completed };

const requested = async ({ github, context, core }) => {
  console.log('workflow requested', github, context)
};

const completed = async ({ github, context, core }) => {
  console.log('workflow completed', github, context)
};
