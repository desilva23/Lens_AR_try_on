import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { GlassArView } from './components/GlassArView';
import './index.css';

const App = () => {
    const [selectedModel, setSelectedModel] = useState('rayban_aviator_or_vertFlash');

    const models = [
        { id: 'rayban_aviator_or_vertFlash', label: 'Golden Aviator' },
        { id: 'carrera_113S_blue', label: 'Blue Carrera' },
        { id: 'rayban_wayfarer_havane_vert', label: 'Classic' },
    ];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#f8f9fa'
        }}>
            <img
                src="logo_primary.jpeg"
                alt="Bonthus Opticals Logo"
                style={{ width: '150px', marginBottom: '10px', height: 'auto' }}
            />
            <h1 style={{
                marginBottom: '15px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                color: '#2c3e50',
                fontSize: '24px'
            }}>
                Bonthus Opticals Virtual Try-On
            </h1>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {models.map((model) => (
                    <button
                        key={model.id}
                        onClick={() => setSelectedModel(model.id)}
                        style={{
                            padding: '12px 24px',
                            borderRadius: '30px',
                            backgroundColor: selectedModel === model.id ? '#0C7FC2' : '#ffffff',
                            color: selectedModel === model.id ? '#ffffff' : '#555555',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'all 0.2s ease',
                            border: selectedModel === model.id ? '2px solid #0C7FC2' : '2px solid transparent'
                        }}
                    >
                        {model.label}
                    </button>
                ))}
            </div>

            <div style={{
                backgroundColor: '#ffffff',
                padding: '15px',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                border: '1px solid #e1e4e8'
            }}>
                <GlassArView
                    modelname={selectedModel}
                    canvasheight={550}
                    canvaswidth={550}
                    buttonBackgroundColor="#0C7FC2"
                    buttonFontColor="white"
                />
            </div>

            <p style={{ marginTop: '20px', color: '#7f8c8d', fontSize: '14px', fontFamily: 'Arial' }}>
                Powered by Bonthus Opticals AR Technology
            </p>
        </div>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
}

export * from './components';