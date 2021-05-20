<?

namespace App\Form\Type;

use App\Entity\TriangleSize;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\RangeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class TriangleSizeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('base', IntegerType::class, [
                'attr' => [
                    'class' => 'user-input',
                    'min' => 1,
                    'max' => 10,
                    'val' => 5
                ]
            ])
            ->add('height', IntegerType::class, [
                'attr' => [
                    'class' => 'user-input',
                    'min' => 1, 
                    'max' => 10,
                    'val' => 5
                ]
            ])
            ->add('calculate', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TriangleSize::class,
        ]);
    }
}