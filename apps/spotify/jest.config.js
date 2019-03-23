module.exports = {
  name: 'spotify',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/spotify/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
