import React from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    PolyLine,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class UserShiba extends React.Component {
    render() {
        const {size}  = this.props;
        const {fill} = this.props;
        return <Svg width={size} height={size} viewBox="0 0 512 512">
                <G fill={fill}>
                    <G>
                        <G>
                            <Path d="M115.652,306.304c4.181,2.074,9.284,0.401,11.401-3.789c2.125-4.181,0.444-9.31-3.729-11.46
                                c-1.237-0.64-30.455-16.171-38.11-62.063c-0.623-3.772-3.686-6.664-7.501-7.074c-3.9-0.435-7.415,1.766-8.841,5.308
                                c-18.517,46.31,16.401,99.533,17.894,101.777c1.638,2.466,4.352,3.797,7.1,3.797c1.621,0,3.268-0.469,4.727-1.434
                                c3.917-2.611,4.983-7.902,2.381-11.827c-0.213-0.324-14.66-22.417-19.115-48.435C95.898,296.132,114.551,305.749,115.652,306.304
                                z"/>
                            <Path d="M155.273,324.096c4.617-0.922,7.62-5.419,6.699-10.035c-0.93-4.617-5.376-7.62-10.044-6.69
                                c-17.126,3.422-49.528,22.067-49.528,68.096c0,33.399,6.997,56.568,12.399,69.453c-18.68,3.627-29.466,15.377-29.466,32.947
                                C85.333,497.647,103.279,512,128,512h8.533c14.148,0,22.852-10.607,23.791-11.81c2.901-3.712,2.244-9.079-1.476-11.981
                                c-3.712-2.91-9.079-2.236-11.972,1.468c-0.043,0.06-4.378,5.257-10.342,5.257H128c-12.723,0-25.6-5.862-25.6-17.067
                                c0-4.224,0-17.067,25.6-17.067c3.132,0,5.999-1.732,7.492-4.489c1.493-2.756,1.34-6.118-0.367-8.738
                                c-0.162-0.247-15.659-24.559-15.659-72.107C119.467,332.194,153.856,324.403,155.273,324.096z"/>
                            <Path d="M397.201,444.919c5.402-12.885,12.399-36.053,12.399-69.453c0-46.029-32.401-64.674-49.527-68.096
                                c-4.625-0.913-9.114,2.065-10.044,6.69c-0.922,4.617,2.082,9.114,6.699,10.035c1.468,0.299,35.806,7.672,35.806,51.371
                                c0,47.548-15.497,71.859-15.633,72.064c-1.741,2.62-1.911,5.99-0.427,8.764c1.485,2.773,4.378,4.506,7.526,4.506
                                c25.6,0,25.6,12.843,25.6,17.067c0,11.204-12.877,17.067-25.6,17.067h-8.533c-5.888,0-10.223-5.111-10.394-5.316
                                c-2.91-3.644-8.226-4.292-11.921-1.408c-3.721,2.901-4.378,8.269-1.476,11.981c0.939,1.203,9.643,11.81,23.791,11.81H384
                                c24.73,0,42.667-14.353,42.667-34.133C426.667,460.297,415.881,448.546,397.201,444.919z"/>
                            <Path d="M308.634,444.382l15.514-93.107c0.776-4.651-2.364-9.045-7.014-9.822c-4.668-0.768-9.045,2.364-9.813,7.006
                                l-15.881,95.275h-1.306c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h8.533c25.6,0,25.6,12.843,25.6,17.067
                                c0,11.204-12.877,17.067-25.6,17.067h-8.533c-14.114,0-25.6-11.486-25.6-25.6V349.867c0-4.71-3.814-8.533-8.533-8.533
                                c-4.719,0-8.533,3.823-8.533,8.533v119.467c0,14.114-11.486,25.6-25.6,25.6h-8.533c-12.723,0-25.6-5.862-25.6-17.067
                                c0-4.224,0-17.067,25.6-17.067h8.533c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-1.306l-15.88-95.275
                                c-0.759-4.642-5.154-7.774-9.813-7.006c-4.651,0.777-7.791,5.171-7.014,9.822l15.514,93.107
                                c-20.668,2.859-32.7,14.925-32.7,33.485c0,19.78,17.946,34.133,42.667,34.133h8.533c13.943,0,26.342-6.724,34.133-17.092
                                C263.791,505.276,276.19,512,290.133,512h8.533c24.73,0,42.667-14.353,42.667-34.133
                                C341.333,459.307,329.301,447.241,308.634,444.382z"/>
                            <Path d="M468.429,72.986C449.673,35.465,404.489,0,375.467,0c-16.478,0-44.834,25.549-59.076,39.475
                                C299.93,25.37,279.893,17.067,256,17.067s-43.93,8.303-60.39,22.409C181.367,25.549,153.011,0,136.533,0
                                c-29.022,0-74.206,35.465-92.962,72.986c-5.649,11.281-9.438,26.53-9.438,37.948c0,23.526,19.14,42.667,42.667,42.667
                                c21.205,0,30.694-13.943,38.306-25.148c0.93-1.357,1.852-2.722,2.927-4.25l34.133-51.2c2.62-3.925,1.562-9.225-2.364-11.836
                                c-3.942-2.628-9.225-1.562-11.836,2.364l-34.005,51.012c-1.007,1.425-1.988,2.867-2.97,4.309
                                c-7.672,11.298-12.587,17.681-24.192,17.681c-14.114,0-25.6-11.486-25.6-25.6c0-8.866,3.14-21.333,7.637-30.319
                                c16.811-33.63,57.455-63.548,77.696-63.548c7.279,0,28.945,16.947,47.01,34.509c-32.06,37.274-47.01,99.678-47.01,161.758
                                c0,78.788,34.611,110.933,119.467,110.933s119.467-32.145,119.467-110.933c0-62.089-14.95-124.484-47.01-161.758
                                c18.065-17.562,39.723-34.509,47.01-34.509c20.241,0,60.885,29.918,77.705,63.548c4.489,8.986,7.629,21.453,7.629,30.319
                                c0,14.114-11.486,25.6-25.6,25.6c-12.023,0-16.768-6.315-24.772-18.406l-36.395-54.596c-2.611-3.925-7.91-4.992-11.836-2.364
                                c-3.925,2.611-4.983,7.91-2.364,11.836l36.361,54.545c8.09,12.211,17.246,26.052,39.006,26.052
                                c23.526,0,42.667-19.14,42.667-42.667C477.867,99.516,474.078,84.267,468.429,72.986z M358.4,213.333
                                c0,69.308-26.803,93.867-102.4,93.867s-102.4-24.559-102.4-93.867c0-89.199,31.667-179.2,102.4-179.2
                                S358.4,124.134,358.4,213.333z"/>
                            <Path d="M299.614,252.092c-1.459,2.842-7.159,3.874-9.481,3.908c-9.992,0-20.318-8.508-24.047-18.287
                                c14.029-3.174,24.047-12.689,24.047-24.38c0-14.353-14.993-25.6-34.133-25.6s-34.133,11.247-34.133,25.6
                                c0,11.691,10.018,21.205,24.047,24.38C242.193,247.492,231.868,256,221.926,256c-2.449-0.034-8.03-1.067-9.591-4.002
                                c-2.21-4.164-7.373-5.743-11.537-3.533s-5.751,7.373-3.533,11.537c6.741,12.698,22.793,13.065,24.602,13.065
                                c13.252,0,26.069-7.569,34.133-18.398c8.064,10.829,20.881,18.398,34.133,18.398c1.826,0,18.057-0.375,24.653-13.158
                                c2.159-4.19,0.512-9.335-3.678-11.494S301.781,247.893,299.614,252.092z M256,221.867c-10.257,0-17.067-5.137-17.067-8.533
                                c0-3.396,6.81-8.533,17.067-8.533c10.419,0,17.067,5.052,17.067,8.533C273.067,216.815,266.419,221.867,256,221.867z"/>
                            <Path d="M294.4,153.6c7.057,0,12.8-5.743,12.8-12.8s-5.743-12.8-12.8-12.8c-7.057,0-12.8,5.743-12.8,12.8
                                S287.343,153.6,294.4,153.6z"/>
                            <Path d="M217.6,153.6c7.057,0,12.8-5.743,12.8-12.8s-5.743-12.8-12.8-12.8s-12.8,5.743-12.8,12.8S210.543,153.6,217.6,153.6z"/>
                        </G>
                    </G>
                </G>
                </Svg>
    }
}

class DisableSvg extends React.Component {
    render() {
        const {size}  = this.props;
        const {fill} = this.props;
        return <Svg width={size} height={size} viewBox="0 0 380 380">
           <G fill={fill}>
			<Path d="M190,0C85.232,0,0,85.234,0,190c0,104.766,85.232,190,190,190c104.767,0,190-85.232,190-190C380,85.233,294.767,0,190,0z      M269.9,316.893l-8.188-14.084c-0.945-1.625-2.703-2.635-4.587-2.635c-0.938,0-1.828,0.242-2.648,0.719     c-1.224,0.711-2.096,1.854-2.458,3.222c-0.358,1.367-0.169,2.793,0.542,4.017l8.199,14.102     c-18.317,9.843-38.906,15.982-60.76,17.43V319.77c0-5.521-4.479-10-10-10c-5.522,0-10,4.479-10,10v19.891     c-21.531-1.424-41.834-7.411-59.949-17.002l8.111-14.149c0.703-1.226,0.887-2.651,0.517-4.018     c-0.37-1.364-1.249-2.502-2.475-3.205c-0.814-0.467-1.697-0.704-2.624-0.704c-1.896,0-3.66,1.021-4.603,2.663l-8.102,14.133     c-18.069-11.266-33.583-26.26-45.447-43.908l17.188-9.923c4.782-2.761,6.421-8.877,3.659-13.66     c-2.761-4.781-8.877-6.421-13.659-3.658l-17.212,9.937c-9.056-18.349-14.466-38.8-15.284-60.41l16.33-0.05     c1.414-0.004,2.741-0.559,3.737-1.561c0.996-1.003,1.543-2.334,1.538-3.748c-0.009-2.91-2.384-5.277-5.293-5.277l-16.348,0.05     c0.699-21.949,6.136-42.72,15.319-61.327l17.212,9.937c1.574,0.909,3.293,1.341,4.989,1.341c3.456,0,6.818-1.793,8.67-5.001     c2.762-4.783,1.123-10.899-3.659-13.66l-17.188-9.923C77.12,89.141,92.36,74.323,110.098,63.114l8.188,14.084     c0.474,0.814,1.124,1.463,1.935,1.929c1.618,0.926,3.669,0.936,5.299-0.013c1.224-0.711,2.097-1.856,2.458-3.223     c0.362-1.366,0.169-2.791-0.541-4.013l-8.198-14.102c18.319-9.843,38.907-15.984,60.76-17.43v19.889c0,5.522,4.478,10,10,10     c5.521,0,10-4.478,10-10V40.346c21.53,1.424,41.832,7.41,59.947,17.001l-8.111,14.149c-1.451,2.532-0.572,5.773,1.959,7.224     c0.813,0.466,1.696,0.703,2.624,0.703c1.897,0,3.66-1.02,4.6-2.661l8.104-14.135c18.071,11.265,33.585,26.261,45.449,43.909     l-17.188,9.923c-4.783,2.761-6.421,8.877-3.659,13.66c1.854,3.208,5.214,5.001,8.67,5.001c1.696,0,3.416-0.432,4.989-1.341     l17.212-9.938c9.058,18.348,14.466,38.8,15.284,60.41l-16.33,0.05c-1.414,0.004-2.741,0.559-3.735,1.561     c-0.996,1.003-1.543,2.333-1.538,3.747c0.006,1.887,1.026,3.642,2.668,4.583c0.794,0.455,1.699,0.693,2.623,0.693h0.017     l16.333-0.05c-0.699,21.949-6.136,42.721-15.319,61.327l-17.212-9.938c-4.784-2.762-10.896-1.122-13.659,3.66     c-2.762,4.782-1.124,10.898,3.659,13.659l17.188,9.923C302.877,290.863,287.639,305.682,269.9,316.893z"/>
			<Path d="M263.906,135.775l-64.142,35.588c-2.92-1.533-6.237-2.412-9.767-2.412c-3.528,0-6.846,0.878-9.766,2.412l-64.141-35.588     c-6.064-3.366-13.711-1.176-17.078,4.889c-3.364,6.065-1.176,13.711,4.891,17.077l65.443,36.311     c1.891,9.686,10.412,16.997,20.65,16.997s18.76-7.312,20.65-16.997l65.441-36.311c6.066-3.365,8.254-11.011,4.891-17.077     C277.618,134.598,269.973,132.409,263.906,135.775z" />
		</G>
        </Svg>;
    }
}

class SendSvg extends React.Component {
    render() {
        const {size}  = this.props;
        return <Svg width={size} height={size} viewBox="0 0 334.5 334.5">
           <G fill={"#FFFFFF"}>
           <Path d="M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481  s1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1  c-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25  c1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073  c1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z" fill="#FFFFFF"/>
            </G>
        </Svg>;
    }
}

class LeftArrow extends React.Component {
    render() {
        const {size}  = this.props;
        return <Svg width={size} height={size} viewBox="0 0 50.959 123.959">
            <G fill={"#00b8ff"} >
                <Path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112
                    C95.942,0.679,89.543-2.021,85.742,1.779z"/>
            </G>
        </Svg>;
    }
}


class LoadSvg extends React.Component {
    render() {
        const {size}  = this.props;
        return <Svg width={size} height={size} viewBox="0 0 16 16">
            <G fill={'#363839'}>
            <Path d="M2.083,9H0.062H0v5l1.481-1.361C2.932,14.673,5.311,16,8,16c4.08,0,7.446-3.054,7.938-7h-2.021
		c-0.476,2.838-2.944,5-5.917,5c-2.106,0-3.96-1.086-5.03-2.729L5.441,9H2.083z"/>
	        <Path  d="M8,0C3.92,0,0.554,3.054,0.062,7h2.021C2.559,4.162,5.027,2,8,2c2.169,0,4.07,1.151,5.124,2.876
		L11,7h2h0.917h2.021H16V2l-1.432,1.432C13.123,1.357,10.72,0,8,0z"/>
            </G>
        </Svg>;
    }
}

class LeftSvg extends React.Component {
    render() {
        const {size}  = this.props;
        return <Svg width={size} height={size} viewBox="0 0 451.846 451.847">
            <G fill={'#b0b0b0'}>
            <Path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
            </G>
        </Svg>;
    }
}

export {
    LoadSvg,
    LeftSvg,
    UserShiba,
    LeftArrow,
    SendSvg,
    DisableSvg
}