var hookshoot = require('hookshot');
hookshot('refs/heads/master', 'git fetch origin && git checkout origin/master && service ghost restart').listen();
