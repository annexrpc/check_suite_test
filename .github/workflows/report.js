const requested = async ({ github, context, core }) => {
  console.log('workflow requested', context.payload)
};

const completed = async ({ github, context, core }) => {
  console.log('workflow completed', context.payload)
};

const actions = { requested, completed };

module.exports = async (args) => {
  const action = actions[args.context.payload.action];
  if (action) await action(args)
};
