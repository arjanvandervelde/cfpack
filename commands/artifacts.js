const Runner = require('../src/Runner');
const ArtifactsTask = require('../src/tasks/Artifacts');

module.exports = (args) => {
	const runner = new Runner(args);

	runner.loadConfig();
	runner.setupLogs();
	runner.use(new ArtifactsTask());
	runner.execute();
};
