const optimizelySdk = require('@optimizely/optimizely-sdk');

async function main() {
  optimizelySdk.setLogLevel('debug');
  optimizelySdk.setLogger(optimizelySdk.logging.createLogger());

  const optimizelyInstance = optimizelySdk.createInstance({
    sdkKey: '<PASTE YOUR SDK KEY HERE>',
    eventBatchSize: 20,
    eventFlushInterval: 5000, // ms
  });

  const result = await optimizelyInstance.onReady({ timeout: 5000 });
  console.log(`Optimizely ready: ${JSON.stringify(result)}`);
  const user = `user${Date.now()}`;

  // Generate impression events:

  // From A/B test
  // optimizelyInstance.activate('<PASTE YOUR EXPERIMENT KEY HERE>', user);

  // From Feature test
  // optimizelyInstance.isFeatureEnabled('<PASTE YOUR FEATURE KEY HERE>', user);


  // Generate conversion events
  // optimizelyInstance.track('<PASTE YOUR EVENT KEY HERE>', user);

  // Close the instance, which immediately flushes the current batch of events
  // optimizelyInstance.close();
}

main();
