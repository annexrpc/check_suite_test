const requested = async ({ github, context, core }) => {
  console.log('workflow requested', github, context)
};

const completed = async ({ github, context, core }) => {
  console.log('workflow completed', github, context)
};

const actions = { requested, completed };

module.exports = async (args) => {
  console.log(args);
  const action = actions[args.github.event.action];
  if (action) await action(args)
};
