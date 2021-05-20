<?php

namespace App\Controller;

use App\Entity\TriangleSize;
use App\Form\Type\TriangleSizeType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class TriangleController extends AbstractController
{
    /**
     * @Route("/triangle", name="triangle")
     */
    public function index(Request $request): Response
    {
        $size = new TriangleSize();

        $form = $this->createForm(TriangleSizeType::class, $size);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $size = $form->getData();
            $base = $size->getBase();
            $height = $size->getHeight();

            return $this->redirectToRoute('result', array('shape' => 'triangle', 'base' => $base, 'height' => $height));
        }

        return $this->render('calculator.html.twig', [
            'form' => $form->createView(),
            'shape' => 'triangle',
            'subtitle' => 'Calculate the surface area of a triangle.',
        ]);
    }
}