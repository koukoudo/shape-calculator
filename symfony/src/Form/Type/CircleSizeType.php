<?

namespace App\Form\Type;

use App\Entity\CircleSize;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class CircleSizeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('radius', IntegerType::class, [
                'attr' => [
                    'class' => 'user-input',
                    'min' => 1,
                    'max' => 10,
                    'val' => 5
                ]
            ])
            ->add('circumference', IntegerType::class, [
                'attr' => [
                    'class' => 'user-input',
                    'min' => round(2*pi()*1), 
                    'max' => round(2*pi()*10),
                    'val' => round(pi()*10)
                ]
            ])
            ->add('volume', IntegerType::class, [
                'attr' => [
                    'class' => 'user-input',
                    'min' => round(4/3*pi()*(1**3)),
                    'max' => round(4/3*pi()*(10**3)),
                    'val' => round(2/3*pi()*(10**3))
                ]
            ])
            ->add('calculate', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => CircleSize::class,
        ]);
    }
}