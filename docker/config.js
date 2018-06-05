'use strict';

module.exports = {
	bindingHost: '0.0.0.0',
	admins: {
	    // name: email
	    victor: 'victor.huang@chinasystems.com',
	    lee: 'admin@cnpmjs.org',
	    lucifer: 'zl.wang@chinasystems.com',
	    bill:'chungengwu@chinasystems.com'
	},
	database: {
	    db: 'cnpmjs',
	    username: 'root',
	    password: 'mysql',

	    // the sql dialect of the database
	    // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
	    dialect: 'mysql',

	    // custom host; default: 127.0.0.1
	    host: '192.168.3.102',

	    // custom port; default: 3306
	    port: 30306
	},
	scopes: [ '@csnpm', '@csnpmtest', '@csnpm-test' ],
	syncModel: 'exist'
};