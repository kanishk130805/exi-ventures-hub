import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onStartTrial: () => void;
}

const HeroSection = ({ onStartTrial }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-brand-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-brand-accent/20 text-brand-accent px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="SparklesIcon" size={16} variant="solid" />
              <span>Trusted by 500+ Indian Startups</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-headline text-white leading-tight">
              Power Your Startup with <span className="text-brand-accent">Smart Tools</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 font-body leading-relaxed">
              Comprehensive software solutions designed specifically for Indian entrepreneurs. From business planning to funding tracking, we've got everything you need to scale faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStartTrial}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-accent text-white font-cta font-semibold rounded-lg hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-base">

                <span>Start Free Trial</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
              
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 text-white font-cta font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-base border border-white/20">
                <Icon name="PlayIcon" size={20} variant="solid" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="text-sm text-gray-300">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                <span className="text-sm text-gray-300">14-day free trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <AppImage
                src="https://images.unsplash.com/photo-1735469157670-1212e570eadc"
                alt="Modern startup office workspace with multiple computer screens showing business analytics dashboards and team collaboration tools"
                className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="ChartBarIcon" size={24} variant="solid" className="text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-secondary">Revenue Growth</p>
                  <p className="text-2xl font-bold text-success">+245%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;
