// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://amisteelman.com/';

export const siteConfig = {
	title: "Ami Steelman's Portfolio",
	author: "Ami Steelman",
	url: SITE_URL,
	mail: "ami.steelman@gmail.com",
	// resume add your resume file path here: /assets/resume.pdf
	resume: "https://amisteelman.com/resume.pdf",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "Ami Steelman's Portfolio",
		description: "Portfolio of Ami Steelman — building practical systems, AI-assisted solutions, and learning experiences that solve real problems.",
		keywords: "implementation, systems design, automation, AI, workflow optimization, problem solving, portfolio",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "",
	},
	// social links
	social:{
		twitter: "",
		twitterName: "",
		github: "",
		blog: "https://amisteelman.com",
		xiaohongshu: ""
	},
};

// Footer
export const socialLinks = [];
