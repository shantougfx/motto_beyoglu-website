export default function ScrollingTextFixed() {
    return (
        <div className="text-white py-3 w-full flex items-center justify-center" style={{ backgroundColor: '#000000', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <span className="text-xs uppercase tracking-wider" style={{ fontWeight: '300', letterSpacing: '0.15em' }}>
                3500 TL üzeri <span style={{ fontWeight: '400' }}>Ücretsiz Kargo</span>
            </span>
        </div>
    );
}