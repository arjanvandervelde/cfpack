const Runner = require('../src/Runner');
const BuildTask = require('../src/tasks/Build');

module.exports = (args) => {
	const runner = new Runner(args);

	runner.loadConfig();
	runner.setupLogs();
	runner.use(new BuildTask());
	runner.execute();
};
