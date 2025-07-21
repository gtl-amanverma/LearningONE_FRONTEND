import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBQRndMXeePQtOtCzsI-OuQc-yWP-CQiFk';

const genAI = new GoogleGenerativeAI(API_KEY);

export default genAI;