<?php

namespace App\Controller;

use App\Entity\TriangleSize;
use App\Form\Type\TriangleSizeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TriangleController extends AbstractController
{
    /**
     * @Route("/triangle", name="triangle")
     */
    public function index(): Response
    {
        $base = (object) ['name' => 'base', 'min' => 1, 'max' => 10, 'val' => 5];
        $height = (object) ['name' => 'height', 'min' => 1, 'max' => 10, 'val' => 5];

        $user_input = array(
            $base,
            $height
        );

        $size = new TriangleSize();
        $size->setBase(5);
        $size->setHeight(5);

        $form = $this->createForm(TriangleSizeType::class, $size);

        return $this->render('calculator.html.twig', [
            'form' => $form->createView(),
            'shape' => 'triangle',
            'subtitle' => 'Calculate the surface area of a triangle',
            'user_input' => $user_input,
            'submit_route' => 'triangle_result'
        ]);
    }

    // /**
    //  * @Route("/triangle/result", name="triangle_result")
    //  */
    // public function triangleResult(): Response
    // {

    // }
}