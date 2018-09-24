import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const GithubIcon = ({ color }) =>
	(
		<Fragment>
			<defs><clipPath id="_clipPath_i9AwAsKbKNmMsFc493Z4X5ffr4g8do9m"><rect width="100" height="100"/></clipPath></defs><g clipPath="url(#_clipPath_i9AwAsKbKNmMsFc493Z4X5ffr4g8do9m)"><rect width="100" height="100" style={{ fill: color }} fillOpacity="0"/><g><path d=" M -8 505 L 55.04 465.6 C 64.4 459.75 63.038 455 52 455 L 42 455 L 57.858 439.142 C 65.663 431.337 63.038 425 52 425 L 2 425 L 2 455 L 42 455 L -18 505 L -18 405 L 67 405 C 75.279 405 82 411.721 82 420 L 82 490 C 82 498.279 75.279 505 67 505 L -18 505 L -8 505 Z " fill={ color }/></g><g><g><g><g><path d=" M 192 423.996 C 188.319 425.627 184.37 426.733 180.221 427.227 C 184.458 424.69 187.701 420.666 189.238 415.885 C 185.264 418.235 180.877 419.941 176.203 420.866 C 172.46 416.873 167.136 414.386 161.231 414.386 C 149.901 414.386 140.716 423.571 140.716 434.894 C 140.716 436.5 140.897 438.069 141.247 439.569 C 124.2 438.712 109.084 430.545 98.967 418.135 C 97.199 421.159 96.193 424.684 96.193 428.445 C 96.193 435.563 99.817 441.843 105.316 445.517 C 101.954 445.405 98.792 444.48 96.024 442.943 L 96.024 443.199 C 96.024 453.135 103.098 461.427 112.477 463.314 C 110.759 463.776 108.947 464.033 107.072 464.033 C 105.747 464.033 104.466 463.901 103.21 463.651 C 105.822 471.806 113.396 477.736 122.369 477.899 C 115.352 483.398 106.503 486.666 96.893 486.666 C 95.237 486.666 93.606 486.566 92 486.385 C 101.08 492.215 111.859 495.614 123.444 495.614 C 161.181 495.614 181.808 464.358 181.808 437.25 L 181.74 434.594 C 185.77 431.72 189.257 428.108 192 423.996 Z " fill={ color }/></g></g></g></g><g><g><g><path d=" M 306.616 526 L 221.389 526 C 217.308 526 214 529.207 214 533.165 L 214 618.833 C 214 622.792 217.309 626.001 221.389 626.001 L 306.616 626.001 C 310.696 626.001 314 622.789 314 618.833 L 314 533.165 C 314 529.208 310.696 526 306.616 526 Z  M 244.317 609.708 L 229.208 609.708 L 229.208 564.558 L 244.317 564.558 L 244.317 609.708 Z  M 236.764 558.39 L 236.662 558.39 C 231.596 558.39 228.311 554.925 228.311 550.587 C 228.311 546.161 231.692 542.79 236.859 542.79 C 242.027 542.79 245.206 546.161 245.306 550.587 C 245.306 554.926 242.028 558.39 236.764 558.39 Z  M 298.782 609.708 L 283.677 609.708 L 283.677 585.551 C 283.677 579.482 281.489 575.34 276.026 575.34 C 271.848 575.34 269.367 578.134 268.278 580.832 C 267.874 581.795 267.774 583.143 267.774 584.488 L 267.774 609.707 L 252.673 609.707 C 252.673 609.707 252.87 568.792 252.673 564.558 L 267.777 564.558 L 267.777 570.959 C 269.782 567.883 273.365 563.495 281.386 563.495 C 291.327 563.495 298.782 569.945 298.782 583.819 L 298.782 609.708 Z  M 267.679 571.102 C 267.705 571.06 267.741 571.009 267.777 570.959 L 267.777 571.102 L 267.679 571.102 Z " fill={ color }/></g></g></g><g><g><g><g><path d=" M 94.499 5.501 C 90.831 1.834 86.416 0 81.25 0 L 18.75 0 C 13.585 0 9.169 1.834 5.501 5.501 C 1.834 9.168 0 13.585 0 18.75 L 0 81.251 C 0 86.415 1.834 90.832 5.501 94.499 C 9.168 98.166 13.585 100 18.75 100 L 33.333 100 C 34.287 100 35.004 99.967 35.481 99.904 C 35.958 99.838 36.435 99.556 36.913 99.056 C 37.391 98.557 37.629 97.83 37.629 96.876 C 37.629 96.746 37.618 95.269 37.596 92.448 C 37.574 89.626 37.563 87.391 37.563 85.741 L 36.066 86.002 C 35.111 86.175 33.907 86.252 32.453 86.23 C 30.999 86.208 29.49 86.057 27.928 85.774 C 26.365 85.492 24.912 84.841 23.566 83.822 C 22.221 82.801 21.266 81.467 20.702 79.818 L 20.051 78.319 C 19.617 77.322 18.933 76.215 18 75.001 C 17.067 73.785 16.123 72.96 15.168 72.526 L 14.712 72.2 C 14.409 71.984 14.127 71.722 13.866 71.418 C 13.606 71.114 13.411 70.81 13.281 70.507 C 13.15 70.203 13.258 69.953 13.606 69.757 C 13.954 69.562 14.582 69.465 15.494 69.465 L 16.796 69.66 C 17.664 69.834 18.738 70.354 20.019 71.223 C 21.299 72.09 22.351 73.219 23.176 74.607 C 24.175 76.387 25.378 77.743 26.789 78.676 C 28.2 79.61 29.621 80.077 31.053 80.077 C 32.485 80.077 33.722 79.968 34.764 79.752 C 35.805 79.535 36.782 79.208 37.694 78.774 C 38.085 75.867 39.148 73.63 40.884 72.068 C 38.41 71.807 36.186 71.417 34.21 70.896 C 32.236 70.375 30.196 69.529 28.091 68.356 C 25.985 67.184 24.239 65.731 22.85 63.994 C 21.461 62.257 20.321 59.979 19.432 57.158 C 18.543 54.336 18.098 51.081 18.098 47.392 C 18.098 42.141 19.813 37.669 23.241 33.98 C 21.635 30.031 21.787 25.604 23.697 20.699 C 24.956 20.309 26.822 20.602 29.296 21.578 C 31.77 22.556 33.582 23.392 34.732 24.085 C 35.883 24.779 36.805 25.365 37.499 25.843 C 41.537 24.715 45.703 24.15 50 24.15 C 54.296 24.15 58.463 24.715 62.501 25.843 L 64.975 24.281 C 66.668 23.239 68.664 22.284 70.965 21.416 C 73.265 20.548 75.023 20.309 76.238 20.7 C 78.191 25.605 78.365 30.032 76.758 33.981 C 80.187 37.67 81.902 42.141 81.902 47.393 C 81.902 51.082 81.457 54.349 80.568 57.191 C 79.679 60.034 78.529 62.313 77.118 64.027 C 75.708 65.742 73.949 67.184 71.845 68.357 C 69.739 69.528 67.699 70.376 65.724 70.895 C 63.749 71.417 61.525 71.808 59.051 72.069 C 61.307 74.021 62.435 77.102 62.435 81.313 L 62.435 96.873 C 62.435 97.612 62.543 98.208 62.76 98.664 C 62.978 99.119 63.325 99.433 63.802 99.608 C 64.282 99.781 64.703 99.89 65.073 99.933 C 65.442 99.976 65.973 99.998 66.668 99.998 L 81.251 99.998 C 86.415 99.998 90.832 98.164 94.498 94.497 C 98.166 90.829 100 86.412 100 81.248 L 100 18.75 C 100 13.585 98.166 9.168 94.499 5.501 Z " fill={ color }/></g></g></g></g><g><g><g><path d=" M 498.655 449.223 L 456.808 407.439 C 455.267 405.813 453.343 405 451.031 405 C 448.72 405 446.795 405.814 445.254 407.439 L 440.376 412.253 C 438.793 413.837 438.001 415.761 438.001 418.029 C 438.001 420.254 438.792 422.202 440.376 423.87 L 471.569 455 L 440.375 486.195 C 438.792 487.778 438 489.703 438 491.971 C 438 494.195 438.792 496.144 440.375 497.811 L 445.253 502.625 C 446.837 504.208 448.763 505 451.03 505 C 453.298 505 455.224 504.208 456.807 502.625 L 498.655 460.841 C 500.239 459.172 501.031 457.225 501.031 455 C 501.031 452.732 500.239 450.806 498.655 449.223 Z " fill={ color }/></g></g></g><g><g><g><g><path d=" M 732 405 L 652 405 C 646.5 405 642 409.5 642 415 L 642 505 L 662 485 L 732 485 C 737.5 485 742 480.5 742 475 L 742 415 C 742 409.5 737.5 405 732 405 Z " fill={ color }/></g></g></g></g><g><g><g><g><path d=" M 533.714 444.285 C 530.738 444.285 528.208 445.327 526.125 447.41 C 524.042 449.493 523 452.022 523 454.999 C 523 457.975 524.042 460.506 526.125 462.589 C 528.209 464.671 530.739 465.713 533.715 465.713 C 536.691 465.713 539.221 464.671 541.304 462.589 C 543.387 460.506 544.429 457.975 544.429 454.999 C 544.429 452.022 543.387 449.493 541.304 447.41 C 539.221 445.327 536.691 444.285 533.714 444.285 Z " fill={ color }/><path d=" M 533.715 415.714 C 530.738 415.714 528.209 416.755 526.125 418.838 C 524.042 420.922 523.001 423.451 523.001 426.427 C 523.001 429.404 524.042 431.934 526.125 434.017 C 528.209 436.1 530.739 437.141 533.715 437.141 C 536.691 437.141 539.22 436.1 541.304 434.017 C 543.387 431.934 544.429 429.404 544.429 426.427 C 544.429 423.451 543.387 420.922 541.304 418.838 C 539.221 416.755 536.692 415.714 533.715 415.714 Z " fill={ color }/><path d=" M 533.715 472.857 C 530.738 472.857 528.208 473.898 526.125 475.981 C 524.042 478.065 523.001 480.595 523.001 483.57 C 523.001 486.548 524.042 489.076 526.125 491.16 C 528.209 493.243 530.739 494.285 533.715 494.285 C 536.691 494.285 539.22 493.243 541.304 491.16 C 543.387 489.076 544.429 486.548 544.429 483.57 C 544.429 480.595 543.387 478.064 541.304 475.981 C 539.221 473.898 536.692 472.857 533.715 472.857 Z " fill={ color }/><path d=" M 622.47 419.815 C 622.116 419.462 621.698 419.285 621.214 419.285 L 553.357 419.285 C 552.873 419.285 552.455 419.462 552.101 419.815 C 551.748 420.169 551.571 420.587 551.571 421.07 L 551.571 431.785 C 551.571 432.269 551.748 432.686 552.101 433.041 C 552.455 433.394 552.874 433.57 553.357 433.57 L 621.214 433.57 C 621.698 433.57 622.116 433.394 622.47 433.041 C 622.824 432.687 623 432.269 623 431.785 L 623 421.07 C 623 420.587 622.823 420.168 622.47 419.815 Z " fill={ color }/><path d=" M 621.214 447.857 L 553.357 447.857 C 552.873 447.857 552.455 448.033 552.101 448.387 C 551.748 448.74 551.571 449.159 551.571 449.642 L 551.571 460.357 C 551.571 460.84 551.748 461.259 552.101 461.612 C 552.455 461.966 552.874 462.142 553.357 462.142 L 621.214 462.142 C 621.698 462.142 622.116 461.967 622.47 461.612 C 622.824 461.259 623 460.84 623 460.357 L 623 449.642 C 623 449.159 622.824 448.739 622.47 448.387 C 622.116 448.034 621.698 447.857 621.214 447.857 Z " fill={ color }/><path d=" M 621.214 476.428 L 553.357 476.428 C 552.873 476.428 552.455 476.604 552.101 476.958 C 551.748 477.312 551.571 477.73 551.571 478.213 L 551.571 488.928 C 551.571 489.412 551.748 489.83 552.101 490.184 C 552.455 490.537 552.874 490.713 553.357 490.713 L 621.214 490.713 C 621.698 490.713 622.116 490.537 622.47 490.184 C 622.824 489.83 623 489.412 623 488.928 L 623 478.213 C 623 477.73 622.824 477.311 622.47 476.958 C 622.116 476.606 621.698 476.428 621.214 476.428 Z " fill={ color }/></g></g></g></g><g><g><g><g><g><path d=" M 772.463 448.32 C 773.2 449.087 774.218 449.521 775.281 449.521 C 776.345 449.521 777.362 449.087 778.099 448.32 L 787.474 438.554 C 788.172 437.826 788.563 436.857 788.563 435.849 L 788.563 399.521 C 788.563 397.363 786.814 395.614 784.656 395.614 L 765.906 395.614 C 763.749 395.614 762 397.363 762 399.521 L 762 435.849 C 762 436.857 762.39 437.826 763.088 438.554 L 772.463 448.32 Z  M 769.813 403.427 L 780.75 403.427 L 780.75 434.277 L 775.281 439.974 L 769.813 434.277 L 769.813 403.427 Z " fill={ color }/><path d=" M 802.234 403.427 L 858.094 403.427 C 860.251 403.427 862 401.678 862 399.521 C 862 397.363 860.251 395.614 858.094 395.614 L 802.234 395.614 C 800.077 395.614 798.328 397.363 798.328 399.521 C 798.328 401.678 800.077 403.427 802.234 403.427 Z " fill={ color }/><path d=" M 858.094 487.802 L 765.906 487.802 C 763.749 487.802 762 489.551 762 491.708 C 762 493.866 763.749 495.614 765.906 495.614 L 858.094 495.614 C 860.251 495.614 862 493.866 862 491.708 C 862 489.551 860.251 487.802 858.094 487.802 Z " fill={ color }/><path d=" M 858.094 464.755 L 765.906 464.755 C 763.749 464.755 762 466.504 762 468.661 C 762 470.819 763.749 472.567 765.906 472.567 L 858.094 472.567 C 860.251 472.567 862 470.819 862 468.661 C 862 466.504 860.251 464.755 858.094 464.755 Z " fill={ color }/><path d=" M 858.094 418.661 L 802.234 418.661 C 800.077 418.661 798.328 420.41 798.328 422.567 C 798.328 424.725 800.077 426.474 802.234 426.474 L 858.094 426.474 C 860.251 426.474 862 424.725 862 422.567 C 862 420.41 860.251 418.661 858.094 418.661 Z " fill={ color }/><path d=" M 858.094 441.708 L 802.234 441.708 C 800.077 441.708 798.328 443.457 798.328 445.614 C 798.328 447.772 800.077 449.521 802.234 449.521 L 858.094 449.521 C 860.251 449.521 862 447.772 862 445.614 C 862 443.457 860.251 441.708 858.094 441.708 Z " fill={ color }/></g></g></g></g></g><g><g><g><g><path d=" M 967.5 396 L 892.5 396 C 885.606 396 880 401.606 880 408.5 L 880 483.5 C 880 490.394 885.606 496 892.5 496 L 930 496 L 930 461.625 L 917.5 461.625 L 917.5 446 L 930 446 L 930 433.5 C 930 423.144 938.394 414.75 948.75 414.75 L 961.25 414.75 L 961.25 430.375 L 955 430.375 C 951.55 430.375 948.75 430.05 948.75 433.5 L 948.75 446 L 964.375 446 L 958.125 461.625 L 948.75 461.625 L 948.75 496 L 967.5 496 C 974.394 496 980 490.394 980 483.5 L 980 408.5 C 980 401.606 974.394 396 967.5 396 Z " fill={ color }/></g></g></g></g></g>
		</Fragment>
	)

GithubIcon.propTypes = {
	color: PropTypes.string
}
  
GithubIcon.defaultProps = {
	color: '#931A38'
}
  
export default GithubIcon