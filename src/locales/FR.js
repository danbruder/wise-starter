module.exports = {
	key: 'fr',
	prefix: '/fr',
	name: 'Français',
	home: {
		title: 'Accueil',
		header: 'Bienvenue',
		welcome: 'Bienvenue sur votre nouveau',
		message: 'Maintenant, allez construire quelque chose de génial.'
	},
	contact: {
		title: 'Contact',
		header: 'Contact',
		placeholder: {
			name: 'Nom',
			email: '@ Mail',
			message: 'Message'
		},
		consent: {
			message:
				'Je consens à ce que mes données soient stockées conformément à la {var}, comme un moyen de communiquer avec Wise Starter.',
			link: 'Politique de Confidentialité'
		},
		submit: 'Envoyer',
		obliviate: {
			message: 'Vous pouvez exercer votre {var} à tout moment.',
			link: "Droit à l'Oubli"
		}
	},
	obliviate: {
		title: 'Oubli',
		header: "Droit à l'Oubli",
		placeholder: {
			email: '@ Mail'
		},
		submit: 'Oubliez moi',
		message:
			"Vous pouvez exercer votre droit à l'oubli conformément à notre {var}, remplir ce formulaire entraînera la suppression de toutes vos informations personnelles de notre base de données.",
		link: 'Politique de Confidentialité'
	},
	thanks: {
		title: 'Merci',
		header: 'Merci',
		message: 'Votre formulaire a été envoyé.',
		link: "Retour à la page d'accueil"
	},
	e404: {
		title: '404',
		header: 'Introuvable',
		message:
			"Vous venez de prendre un chemin qui n'existe pas... la tristesse!",
		link: "Retour à la page d'accueil"
	}
}
