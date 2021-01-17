<template>
  <div>
      <!-- JQUERY and Normalize.css INSTALLED -->

        <div class="overlay" :class="{loaded: isLoaded}">
            <div class="overlayDoor"></div>
            <div class="overlayContent">
                <div class="loader">
                    <div class="inner"></div>
                </div>
            </div>
        </div>



        <!-- DON'T NEED THIS PART -->
        <div class="header">
            <div class="darken">
                <h1>
                    The page has fully loaded!<br/><span>Or you skipped...</span></h1>
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLoaded : false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoaded = true
        }, 3000);
    }

}
</script>

<style lang="scss" scoped>
.loaded {
		overflow-y: auto;
		overflow-x: hidden;
	}


.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100000000;
	.overlayDoor {
		&:before, &:after {
			content: "";
			position: absolute;
			width: 50%;
			height: 100%;
			background: #111;
			transition: .5s cubic-bezier(.77,0,.18,1);
			transition-delay: .8s;
		}
		&:before {
			left: 0;
		}
		&:after {
			right: 0;
		}
	}
	&.loaded {
		.overlayDoor {
			&:before {
				left: -50%;
			}
			&:after {
				right: -50%;
			}
		}
		.overlayContent {
			opacity: 0;
			margin-top: -15px;
		}
	}
	.overlayContent {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transition: .5s cubic-bezier(.77,0,.18,1);
		.skip {
			display: block;
			width: 130px;
			text-align: center;
			margin: 50px auto 0;
			cursor: pointer;
			color: #fff;
			font-family: 'Nunito';
			font-weight: 700;
			padding: 12px 0;
			border: 2px solid #fff;
			border-radius: 3px;
			transition: 0.2s ease;
			&:hover {
				background: #ddd;
				color: #444;
				border-color: #ddd;
			}
		}
	}
}
.loader {
	width: 128px;
	height: 128px;
	border: 3px solid #fff;
	border-bottom: 3px solid transparent;
	border-radius: 50%;
	position: relative;
	animation: spin 1s linear infinite;
	display: flex;
	justify-content: center;
	align-items: center;
	.inner {
		width: 64px;
		height: 64px;
		border: 3px solid transparent;
		border-top: 3px solid #fff;
		border-radius: 50%;
		animation: spinInner 1s linear infinite;
	}
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes spinInner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-720deg);
	}
}















// Don't need this part

body {
	background: #eee;
}

.header {
	background: url('https://picsum.photos/4096/2160?random=1') center/cover;
	background-size: cover;
	height: 100vh;
	.darken {
		background: rgba(0,0,0,0.5);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			font-family: 'Nunito';
			font-weight: 700;
			color: #fff;
			margin: 0 0 20px 0;
			text-align: center;
			span {
				font-size: 12px;
				top: -10px;
				position: relative;
			}
		}
		p {
			color: #fff;
			font-family: 'Roboto';
			font-weight: 700;
			text-align: center;
			width: 500px;
			margin: 0 auto;
			line-height: 25px;
		}
	}
}
.contentOther {
	background: #fff;
	width: 900px;
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
	box-shadow: 0 3px 5px rgba(0,0,0,0.1);
	.video {
		height: 484px;
		width: 100%;
		border-radius: 5px;
	}
	h1 {
		font-family: 'Roboto';
		margin: 0 0 10px 0;
		font-weight: 400;
	}
}


</style>