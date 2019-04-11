self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
		//pada TODO 3.4 adalah berfungsi untuk mengklik melanjutkan untuk tidak menunggu instaling worker
});
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
		//pada event diatas adalah untuk mengaktifkan service worker dan akan keluaran di menu console "service worker activating"
});
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
		//pad event diatas yaitu eventaddlistener yaitu fetch berfungsi untuk mencari fetch dengan url yang diminta dan pada console akan ditampilkan "Fatching : , event.request.url yaitu url yang di minta "
});