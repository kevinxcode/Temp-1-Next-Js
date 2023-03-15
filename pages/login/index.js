import React from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic";
// import bg from 'assets/media/illustrations/sketchy-1/14.png'

const index = () => {
    
  return (
    <>
    	<Head>
		<title>application title</title>
		<meta charset="utf-8" />
		<meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
		<meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme" />
		<meta property="og:url" content="https://keenthemes.com/metronic" />
		<meta property="og:site_name" content="Keenthemes | Metronic" />
		<link rel="canonical" href="https://preview.keenthemes.com/metronic8" />
		<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
	</Head>
    <div id="kt_body" class="bg-body">
    <div class="d-flex flex-column flex-root">
			<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" 
            style={{backgroundImage:  `url(assets/media/illustrations/sketchy-1/14.png)`}}>
				
				<div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
					
					<a href="/login" class="mb-12">
						<img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
					</a>
					<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
						
							<div class="text-center mb-10">
								<h1 class="text-dark mb-3"><p>Sign In</p></h1>
							</div>
							<div class="fv-row mb-10">
								<label class="form-label fs-6 fw-bolder text-dark">Email</label>
								<input class="form-control form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
							</div>
							<div class="fv-row mb-10">
								<div class="d-flex flex-stack mb-2">
									<label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
								</div>
								
								<input class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
								
							</div>
							
							<div class="text-center">
								
								<button type="button" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
									<span class="indicator-label">Continue</span>
									<span class="indicator-progress">Please wait...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
								
							</div>
					</div>
					
				</div>
				<div class="d-flex flex-center flex-column-auto p-10">
					
					<div class="d-flex align-items-center fw-bold fs-6">
						<a href="/" class="text-muted text-hover-primary px-2">About</a>
						
					</div>
					
				</div>
				
			</div>
			
		</div>
		
		{/* <script src="assets/plugins/global/plugins.bundle.js"></script> */}
		{/* <script src="assets/js/scripts.bundle.js"></script> */}
		{/* <script src="assets/js/custom/authentication/sign-in/general.js"></script> */}
		
    </div>
    </>
  )
}

export default index
